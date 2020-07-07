import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Link from "components-shared/Link";

const Header = ({ className, links, title }) => {
  const _className = classNames(styles.header, className);
  const _color = "black";
  const _hoverColor = "rgba(0, 0, 0, .6)";

  return (
    <>
      <div className={styles.headerSpace}></div>
      <header className={_className}>
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
          {links.map((linkProps, i) => (
            <Link
              color={_color}
              hoverColor={_hoverColor}
              key={`header-link-${i}`}
              {...linkProps}
              className={styles.link}
            />
          ))}
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  links: PropTypes.array,
  title: PropTypes.string,
};

Header.defaultProps = {
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
  title: "Open Sideway's Dictionary",
};

export default Header;
