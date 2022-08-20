export type UserContextState = {
  user: {};
};

export interface IAccount {
  user: IUser;
  token: string;
  msg: IUser;
}

export interface IState {
  user: IUser;
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface IBank {
  _id: string;
  accountName: string;
  accountNumber: number;
  bankName: string;
  balance: number;
  userId: string;
  createdAt: string;
  updatedAt: string;
}
