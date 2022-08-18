import { useRoutes, BrowserRouter as Router } from 'react-router-dom';

import Signin from './pages/signin/signin.component';
import Signup from './pages/signup/signup.component';

import './App.scss';

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <Signin /> },
    { path: '/signup', element: <Signup /> },
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
