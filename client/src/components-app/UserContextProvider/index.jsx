import React, { useState } from "react";
import { STORAGE_JWT } from "constants/index";
import jwt_decode from "jwt-decode";

export const UserContext = React.createContext({
  user: null,
  setUser: () => {},
});

export const getInitUser = () => {
  const user =
    localStorage.getItem(STORAGE_JWT) &&
    jwt_decode(localStorage.getItem(STORAGE_JWT));
  if (user && user.exp * 1000 > Date.now()) return user;
  localStorage.removeItem(STORAGE_JWT);
  return null;
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(getInitUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
