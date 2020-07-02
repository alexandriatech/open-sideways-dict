import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./ApolloClient";
import UserContextProvider from "components-app/UserContextProvider";
import Routes from "Routes";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
    </ApolloProvider>
  );
};

export default App;
