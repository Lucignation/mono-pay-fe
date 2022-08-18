import { useRoutes, BrowserRouter as Router } from 'react-router-dom';

import Signin from './pages/signin/signin.page';
import Signup from './pages/signup/signup.page';
import Dashboard from './pages/dashboard/dashboard.page';

import './App.scss';

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <Signin /> },
    { path: '/signup', element: <Signup /> },
    { path: '/dashboard', element: <Dashboard /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <div>
      <Router>
        {/* <Navigator /> */}
        <App />
      </Router>
    </div>
  );
};

export default AppWrapper;
