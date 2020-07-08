import React, { useContext } from "react";
import GoogleLoginButton from "components-app/GoogleLoginButton";
import LogOutButton from "components-app/LogOutButton";
import { UserContext } from "components-app/UserContextProvider";
import Heading from "components-shared/Heading";
import Button from "components-shared/Button";

const HEADING_TEXT = "Please Login";
const SUBHEADING_TEXT = "and explain the Javascript World!";
const SIGNIN_TEXT = "Sign in with Google";

const Login = () => {
  const { user } = useContext(UserContext);

  if (!!user)
    return (
      <LogOutButton render={(props) => <Button {...props}>Logout</Button>} />
    );
  return (
    <div>
      <Heading>{HEADING_TEXT}</Heading>
      <p>{SUBHEADING_TEXT}</p>
      <GoogleLoginButton
        render={(props) => <Button {...props}>{SIGNIN_TEXT}</Button>}
      />
    </div>
  );
};

export default Login;
