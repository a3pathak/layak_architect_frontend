import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
// import { state, country } from '../../_mock';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  user: null,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET Tax
    setBasic(state, action) {
      const user = action.payload;
      state.user = user;
    },
  },
});

// Reducer
export default slice.reducer;

export const { setBasic } = slice.actions;

// ----------------------------------------------------------------------

export const getBasic = () => async (dispatch) => {
  try {
    await axios.get('/basic').then((response) => dispatch(setBasic(response.data)));
  } catch (error) {
    return console.error(error.message);
  }
  return true;
};

export const getBranch = () => async (dispatch) => {
    console.log()
}
export const getLogoSignature = () => async (dispatch) => {
    console.log()
}