export type UserContextState = {
  user: {};
};

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
  token: string;
}
