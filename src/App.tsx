import {
  useRoutes,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { createContext, useState } from 'react';

import Signin from './pages/signin/signin.page';
import Signup from './pages/signup/signup.page';
import Dashboard from './pages/dashboard/dashboard.page';
import { PrivateRoute } from './utils/Auth';

import './App.scss';
import { RootState } from './store/store';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
function useSelector(arg0: (state: RootState) => any) {
  throw new Error('Function not implemented.');
}
