import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUser, IAccount } from '../common/types';

const initialState: IAccount = {
  user: {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    _id: '',
    createdAt: '',
    updatedAt: '',
  },
  token: '',
  msg: {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    _id: '',
    createdAt: '',
    updatedAt: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: IAccount, action: PayloadAction<IAccount>) => {
      localStorage.setItem('token', action.payload.token);
      // localStorage.removeItem('token');
      state.user = action.payload.msg;
    },
    logOut: () => {
      localStorage.removeItem('token');
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logOut } = userSlice.actions;

export default userSlice.reducer;
