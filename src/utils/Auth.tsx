import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store/store';

interface IProps {
  children: React.ReactElement;
}

export const PrivateRoute: FC<IProps> = ({ children }) => {
  const token = localStorage.getItem('token');
  return <>{token ? children : <Navigate to='/' />}</>;
};
