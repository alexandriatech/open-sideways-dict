import React, { useContext } from "react";
import GoogleLoginButton from "components/GoogleLoginButton";
import LogOutButton from "components/LogOutButton";
import { UserContext } from "components/UserContextProvider";

const Login = () => {
  const { user } = useContext(UserContext);

  return <div>{!!user ? <LogOutButton /> : <GoogleLoginButton />}</div>;
};

export default Login;
