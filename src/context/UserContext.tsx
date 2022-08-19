// import { createContext, FC, useReducer } from 'react';
// import { useState, useEffect, useMemo } from 'react';

// import { IUser, IState } from '../common/types';

// const defaultUser = {
//   user: {},
// };
// export const UserContext = createContext(null);

// const userReducer = (state: IState, action: unknown) => {
//   switch (action) {
//     case 'SET_USER':
//       return {
//         user: state.user,
//       };
//   }
// };

// export function UserProvider({ children }) {
//   const [state, dispatch] = useReducer(userReducer, defaultUser);
//   return (
//     <UserContext.Provider value={{ state, dispatch }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

import React from 'react';

const UserContext = () => {
  return <div>UserContext</div>;
};

export default UserContext;
