import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../common/types';

export interface CounterState {
  user: IUser;
}

const initialState: CounterState = {
  user: {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    _id: '',
    createdAt: '',
    updatedAt: '',
    token: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
