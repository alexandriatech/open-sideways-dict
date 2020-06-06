import React, { useContext } from "react";
import { UserContext } from "components/UserContextProvider";
import { STORAGE_JWT } from "constants/index";
import styles from "./styles.module.css";

const LogOutButton = ({ children }) => {
  const { setUser } = useContext(UserContext);

  function logout() {
    setUser(null);
    localStorage.removeItem(STORAGE_JWT);
  }

  return (
    <div onClick={logout}>
      {children || <div className={styles.button}>Log Out</div>}
    </div>
  );
};

export default LogOutButton;
