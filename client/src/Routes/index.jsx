import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "components-app/UserContextProvider";
// josue: might use later so leaving it here
// import AuthenticatedRoute from "components-app/AuthenticatedRoute";
import Home from "./Home";
import UserWords from "./UserWords";
// import Login from "./Login";
// import ProtectedRoute from "./ProtectedRoute";
// import PublicRoute from "./PublicRoute";
import NoMatch from "./NoMatch";
import Header from "components-shared/Header";

const ROUTES = (isAuthenticated) => [
  {
    exact: true,
    path: "/",
    children: <Home />,
    title: "Home",
  },
  {
    exact: true,
    path: "/word/:id",
    children: "word : id",
    title: "Word Id",
  },
  {
    exact: true,
    path: "/tag/:tag",
    children: "tag : tag",
    title: "Tag",
  },
  {
    exact: true,
    path: "/share/:wordId",
    children: "Share Id",
    title: "Share",
  },
  {
    exact: true,
    path: "/user/:id",
    children: <UserWords />,
    title: "User",
  },
  {
    exact: true,
    path: "/about",
    children: "about",
    title: "About",
  },
  {
    exact: true,
    path: "/login",
    children: "login",
    title: "Login Page",
  },
];

const Routes = () => {
  const { user } = useContext(UserContext);
  const routes = ROUTES(true);

  return (
    <Router>
      <Header />
      <Switch>
        {routes.map(({ ...routeProps }, i) => (
          <Route {...routeProps} key={`route-${i}`}></Route>
        ))}
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
