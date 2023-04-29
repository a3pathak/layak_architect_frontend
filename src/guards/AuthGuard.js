// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// // hooks
// import useAuth from '../hooks/useAuth';
// // pages
// import Login from '../pages/auth/Login';
// // components
// import LoadingScreen from '../components/LoadingScreen';
// import PlanSubscriptions from '../pages/Offer';

// // ----------------------------------------------------------------------

// AuthGuard.propTypes = {
//   children: PropTypes.node,
// };

// export default function AuthGuard({ children }) {
//   const { isAuthenticated, isInitialized, user } = useAuth();
//   const { pathname } = useLocation();
//   const [requestedLocation, setRequestedLocation] = useState(null);

//   if (!isInitialized) {
//     return <LoadingScreen />;
//   }

//   if (!isAuthenticated) {
//     if (pathname !== requestedLocation) {
//       setRequestedLocation(pathname);
//     }
//     return <Login />;
//   }

//   const currentDate = new Date();
//   const lastDate = new Date(user.subscription_end);
//   if (currentDate.getTime() > lastDate.getTime() || lastDate.toString() === 'Invalid Date') {
//     if (pathname !== requestedLocation) {
//       setRequestedLocation(pathname);
//     }
//     return <PlanSubscriptions />;
//   }

//   if (requestedLocation && pathname !== requestedLocation) {
//     setRequestedLocation(null);
//     return <Navigate to={requestedLocation} />;
//   }

//   return <>{children}</>;
// }
