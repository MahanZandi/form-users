import { React } from 'react';
import { useLocation , Navigate} from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('logged_user') !== null;
  const location = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate
      replace
      to="/login"
      state={{ from: `${location.pathname}${location.search}` }}
    />
  );
};

export default PrivateRoute;