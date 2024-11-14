import { React } from 'react';
import { useLocation , Navigate} from 'react-router-dom';
import { useCookies } from 'react-cookie';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('logged_user') !== null;
  // const cookies = useCookies('token');
  // const isLoggedIn = cookies !== null
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

//? این کامپوننت برسی میکند که توکن داریم یا نه اگر توکن نداشتیم اجازه نمیدهد به صفحات دیگر دسترسی داشته باشیم