import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// josue: experimenting with themes.
// i've always had trouble thinking
// about the best way to handle theme switching
// looking at react docs (https://reactjs.org/docs/context.html)
// they use context to define a theme. although i like this approach i want to avoid using inline styling (they don't use it)
//  and also avoid adding a classname to every component to define it's style.
// my approach is having a theme context to say what theme it currently is and being able to manipulate the theme (switch).
// but to know the theme shouldn't be neccessery to style it... i mean in javascript we shouldn't care. it should matter to css.
// the main reason is to keep javascript just javascript and css css. (cleaner code in my opinion)
// to do this we just simply wrap everything in the context provider in a div that will handle the global class on which theme it currently is on.
// of course this does not mean js should never know what the theme is. there might be components that might need to know for example switching images or behavior is different.

export const ThemeContext = React.createContext({
  theme: null,
  setTheme: () => {},
});

const ThemeContextProvider = ({ children, className }) => {
  const [theme, setTheme] = useState("default");
  const _className = classNames(className, theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={_className}>{children}</div>
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ThemeContextProvider;
