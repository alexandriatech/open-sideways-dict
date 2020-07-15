import React, { useContext } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import GoogleLoginButton from "components-app/GoogleLoginButton";
import LogOutButton from "components-app/LogOutButton";
import { UserContext } from "components-app/UserContextProvider";
import Heading from "components-shared/Heading";
import Button from "components-shared/Button";

const HEADING_TEXT = "Please Login";
const SUBHEADING_TEXT = "and explain the Javascript World!";
const SIGNIN_TEXT = "Sign in with Google";

const Login = ({ state, className }) => {
  const { user } = useContext(UserContext);
  const _className = classNames(className, styles.loginPage, styles[state]);

  console.log("login state", state);
  if (!!user)
    return (
      <LogOutButton render={(props) => <Button {...props}>Logout</Button>} />
    );
  return (
    <div className={_className}>
      <Heading>{HEADING_TEXT}</Heading>
      <p>{SUBHEADING_TEXT}</p>
      <GoogleLoginButton
        render={(props) => <Button {...props}>{SIGNIN_TEXT}</Button>}
      />
    </div>
  );
};

export default Login;
