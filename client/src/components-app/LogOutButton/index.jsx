import React, { useContext } from "react";
import { UserContext } from "components-app/UserContextProvider";
import { STORAGE_JWT } from "constants/index";
import styles from "./styles.module.css";

const LogOutButton = ({ children, render }) => {
  const { setUser } = useContext(UserContext);

  function logout() {
    setUser(null);
    localStorage.removeItem(STORAGE_JWT);
  }

  if (render) return React.createElement(render, { onClick: logout, children });

  return (
    <div onClick={logout}>
      {children || <div className={styles.button}>Log Out</div>}
    </div>
  );
};

export default LogOutButton;
