import React, { useContext } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import GoogleLoginButton from "components-app/GoogleLoginButton";
import LogOutButton from "components-app/LogOutButton";
import { UserContext } from "components-app/UserContextProvider";
import Heading from "components-shared/Heading";
import Button from "components-shared/Button";
import Link from "components-shared/Link";

// TODO: these should be props passed down and should be saved in
const HEADING_TEXT = "Please Login";
const SUBHEADING_TEXT = "and explain the Javascript World!";
const SIGNIN_TEXT = "Sign in with Google";

const Login = ({ className }) => {
  const { user } = useContext(UserContext);
  const _className = classNames(className, styles.loginPage);

  return (
    <div className={_className}>
      {!!user ? (
        <>
          <Heading type={"h2"}>
            Logged in as{" "}
            <Link
              appearance={"alt"}
              href={`/user/${user.id}`}
              color="white"
              hoverColor="white"
            >
              {user.username}
            </Link>
          </Heading>
          <LogOutButton
            render={(props) => <Button {...props}>Logout</Button>}
          />
        </>
      ) : (
        <>
          <Heading>{HEADING_TEXT}</Heading>
          <p className={styles.subHeading}>{SUBHEADING_TEXT}</p>
          <GoogleLoginButton
            render={(props) => <Button {...props}>{SIGNIN_TEXT}</Button>}
          />
        </>
      )}
    </div>
  );
};

export default Login;
