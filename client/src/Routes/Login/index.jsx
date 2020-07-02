import React, { useContext } from "react";
import GoogleLoginButton from "components-app/GoogleLoginButton";
import LogOutButton from "components-app/LogOutButton";
import { UserContext } from "components-app/UserContextProvider";

const Login = () => {
  const { user } = useContext(UserContext);

  return <div>{!!user ? <LogOutButton /> : <GoogleLoginButton />}</div>;
};

export default Login;
