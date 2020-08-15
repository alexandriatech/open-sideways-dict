import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { ThemeContext } from "components-shared/ThemeContextProvider";
import Link from "components-shared/Link";
import { NAV_TITLE } from "constants/index";

const Navbar = ({ className, links, title }) => {
  const { theme } = useContext(ThemeContext);
  const _className = classNames(styles.header, className);
  const _color = theme === "default" ? "black" : "white";
  const _hoverColor =
    theme === "default" ? "rgba(0, 0, 0, .6)" : "rgba(255, 255, 255, .6)";

  return (
    <>
      <div className={styles.headerSpace}></div>
      <nav className={_className} key={theme}>
        <div className={styles.wordListGradientTop}></div>
        <Link
          appearance="noline"
          className={styles.title}
          color={_color}
          hoverColor={_hoverColor}
          href="/"
        >
          {title}
        </Link>
        <div className={styles.links}>
          {links.map((linkProps, i) => {
            if (linkProps)
              return (
                <Link
                  color={_color}
                  hoverColor={_hoverColor}
                  key={`header-link-${i}`}
                  {...linkProps}
                  className={styles.link}
                />
              );
            else return "";
          })}
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  links: PropTypes.array,
  title: PropTypes.string,
};

Navbar.defaultProps = {
  links: [
    {
      children: "Login",
      href: "/login",
    },
    {
      children: "About",
      href: "/about",
    },
  ],
  title: NAV_TITLE,
};

export default Navbar;
