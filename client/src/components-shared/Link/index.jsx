import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Link as LinkRouter } from "react-router-dom";

const Link = ({
  appearance,
  children,
  className,
  href,
  isExternal,
  ...props
}) => {
  const _className = classNames(styles.link, className, styles[appearance]);

  if (isExternal)
    return (
      <a href className={_className} {...props}>
        {children}
        <div className={styles.line}></div>
      </a>
    );

  return (
    <LinkRouter to={href} className={_className} {...props}>
      {children}
      <div className={styles.line}></div>
    </LinkRouter>
  );
};

Link.propTypes = {
  appearance: PropTypes.oneOf(["default", "alt", "none"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
};

Link.defaultProps = {
  appearance: "default",
  isExternal: false,
};

export default Link;
