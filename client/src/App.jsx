import React from "react";
import "./App.scss";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./ApolloClient";
import UserContextProvider from "components-app/UserContextProvider";
import ThemeContextProvider from "components-shared/ThemeContextProvider";
import Routes from "Routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeContextProvider className="theme-wrapper">
          <UserContextProvider>
            <Routes />
          </UserContextProvider>
        </ThemeContextProvider>
      </Router>
    </ApolloProvider>
  );
};

export default App;
