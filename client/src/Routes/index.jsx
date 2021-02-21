import React, { useContext, useRef } from "react";
import { Switch, Route, useLocation, matchPath } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { UserContext } from "components-app/UserContextProvider";
import { ThemeContext } from "components-shared/ThemeContextProvider";
// josue: might use later so leaving it here
// import AuthenticatedRoute from "components-app/AuthenticatedRoute";
import About from "./About";
import AddDef from "./AddDef";
import AddWord from "./AddWord";
import Home from "./Home";
import Login from "./Login";
import Share from "./Share";
import Tag from "./Tag";
import UserWords from "./UserWords";
import Word from "./Word";
// import ProtectedRoute from "./ProtectedRoute";
// import PublicRoute from "./PublicRoute";
import NoMatch from "./NoMatch";
import Navbar from "components-shared/Navbar";
import { useEffect } from "react";
import Admin from "./Admin";

const ROUTES = (isAuthenticated) => [
  {
    exact: true,
    path: "/",
    Component: Home,
    title: "Home",
  },
  {
    exact: true,
    path: "/word/:word",
    Component: Word,
    title: "Word Id",
  },
  {
    exact: true,
    path: "/tag/:tag",
    Component: Tag,
    title: "Tag",
  },
  {
    exact: true,
    path: "/share/:id",
    Component: Share,
    title: "Share",
  },
  {
    exact: true,
    path: "/user/:id",
    Component: UserWords,
    title: "User",
  },
  {
    exact: true,
    path: "/about",
    Component: About,
    title: "About",
  },
  {
    exact: true,
    path: "/login",
    Component: Login,
    title: "Login",
  },
  {
    exact: true,
    path: "/addword",
    Component: AddWord,
    title: "addWord",
  },
  {
    exact: true,
    path: "/addDef/:word",
    Component: AddDef,
    title: "addDef",
  },
  {
    exact: true,
    path: "/admin",
    Component: Admin,
    title: "Admin",
  },
  {
    exact: true,
    path: "/*",
    Component: NoMatch,
    title: "404",
  },
];

// dynamic links for when a user is logged in, and their role
const NAV_LINKS = (role) => [
  {
    children: role ? "Logout" : "Login",
    href: "/login",
  },
  role === "admin" && {
    children: "Admin",
    href: "/admin",
  },
  {
    children: "About",
    href: "/about",
  },
];

// a list of all routes that use alt themes
const altThemeRoutes = ["/login", "/share/:id", "/about"];

const Routes = () => {
  const { user } = useContext(UserContext);
  const { setTheme } = useContext(ThemeContext);
  const location = useLocation();
  const routes = ROUTES(true);
  const nodeRef = useRef(null);

  useEffect(() => {
    // josue: a delay cause of the transition, it looks weird without it... gotta make it smooth like butta
    const timeOut = setTimeout(() => window.scrollTo(0, 0), 299);
    return () => clearTimeout(timeOut);
  }, [location.pathname]);

  useEffect(() => {
    const isMatchAltTheme = matchPath(location.pathname, {
      path: altThemeRoutes,
    });
    if (isMatchAltTheme) setTheme("alt");
    else setTheme("default");
  }, [location, setTheme]);

  return (
    <>
      <Navbar links={NAV_LINKS(user ? user.role : null)} />
      <SwitchTransition>
        {/* josue: page transitions should only be scoped for each page 
        because we are using css modules. although the transitions are similar the components may not be
        (plus css moduldes).
        using this everything page has a timeout so that means every page must have a transition
        */}
        <CSSTransition
          key={location.pathname}
          timeout={300}
          classNames="page"
          nodeRef={nodeRef}
          appear
        >
          <Switch location={location}>
            {routes.map(({ Component, ...routeProps }, i) => (
              <Route key={routeProps.path} {...routeProps}>
                <div ref={nodeRef}>
                  <Component user={user}/>
                </div>
              </Route>
            ))}
          </Switch>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default Routes;
