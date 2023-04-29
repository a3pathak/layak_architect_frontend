import jwtDecode from 'jwt-decode';
import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
// utils
import axios from '../utils/axios';
import { isValidToken, setSession } from '../utils/jwt';

// ----------------------------------------------------------------------

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  REGISTER: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  SWITCHBRANCH: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: false,
      user,
    };
  },
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
  ...initialState,
  method: 'jwt',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  switchBrach: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem('accessToken');

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);

          const user = jwtDecode(accessToken);

          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = async (email, password) => {
    const credentials = new FormData();
    credentials.append('username', email);
    credentials.append('password', password);
    const response = await axios.post('/login', credentials);
    const accessToken = response.data.access_token;
    setSession(accessToken);
    const user = jwtDecode(accessToken);
    dispatch({
      type: 'LOGIN',
      payload: {
        user,
      },
    });
  };

  const switchBrach = async (id) => {
    const response = await axios.get(`/switchBranch?ID=${id}`);
    const accessToken = response.data.access_token;
    setSession(accessToken);
    const user = jwtDecode(accessToken);
    dispatch({
      type: 'LOGIN',
      payload: {
        user,
      },
    });
  };

  const register = async (email, password, mobile) => {
    const response = await axios.post('/register', {
      email,
      password,
      mobile,
    });
    const accessToken = response.data.access_token;
    setSession(accessToken);
    const user = jwtDecode(accessToken);
    const packs = localStorage.getItem('package');
    const pack = JSON.parse(packs);
    dispatch({
      type: 'REGISTER',
      payload: {
        user,
      },
    });
    if (accessToken && pack) {
      const { subscription, subscriptionType } = pack;
      let localSubscription = parseInt(subscription, 10);
      if (subscriptionType === 1) {
        localSubscription += 1;
      }
      if (window.location.origin !== 'https://www.startupkhata.com') {
        localSubscription = 11;
      }
      const { data } = await axios.post('subscriptions/get-token', {
        subscription: localSubscription,
      });
      if (data.encryption) {
        window.location.href = data.encryption;
      }
    }
    
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout,
        register,
        switchBrach,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
