import { useRoutes, BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { createContext, useState } from 'react';
import { Provider } from 'react-redux';

import Signin from './pages/signin/signin.page';
import Signup from './pages/signup/signup.page';
import Dashboard from './pages/dashboard/dashboard.page';

import './App.scss';

export const LoginContext = createContext({
  loggedIn: false,
  setLoggedIn: (loggedIn: false) => {},
});

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <Signin /> },
    { path: '/signup', element: <Signup /> },
    { path: '/dashboard', element: <Dashboard /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <Router>
        <ToastContainer />
        {/* <Navigator /> */}
        <App />
      </Router>
    </LoginContext.Provider>
  );
};

export default AppWrapper;
