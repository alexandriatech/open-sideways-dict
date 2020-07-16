import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./ApolloClient";
import UserContextProvider from "components-app/UserContextProvider";
import Routes from "Routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <UserContextProvider>
          <Routes />
        </UserContextProvider>
      </Router>
    </ApolloProvider>
  );
};

export default App;
