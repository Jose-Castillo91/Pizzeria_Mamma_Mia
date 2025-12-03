/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  const logout = () => {
    setToken(false);
  };

  const globalUserState = {
    token,
    logout,
    setToken,
  };

  return (
    <UserContext.Provider value={globalUserState}>
      {children}
    </UserContext.Provider>
  );
};
