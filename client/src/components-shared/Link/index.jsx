import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Link as LinkRouter } from "react-router-dom";

const Link = ({
  appearance,
  children,
  className,
  color,
  hoverColor,
  href,
  isExternal,
  ...props
}) => {
  const [currColor, setCurrColor] = useState(color);
  const _className = classNames(styles.link, className, styles[appearance]);
  const linkStyle = { color: currColor };
  const lineStyle = { backgroundColor: currColor };
  const line = <span className={styles.line} style={lineStyle}></span>;

  props.onMouseEnter = () => setCurrColor(hoverColor);
  props.onMouseLeave = () => setCurrColor(color);

  if (isExternal)
    return (
      <a href={href} className={_className} style={linkStyle} {...props}>
        {children}
        {line}
      </a>
    );

  return (
    <LinkRouter to={href} className={_className} style={linkStyle} {...props}>
      {children}
      {line}
    </LinkRouter>
  );
};

Link.propTypes = {
  appearance: PropTypes.oneOf(["default", "alt", "none", "noline"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  href: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
};

Link.defaultProps = {
  appearance: "default",
  isExternal: false,
  color: "rgba(0, 0, 0, .6)",
  hoverColor: "rgba(0, 0, 0, 1)",
};

export default Link;
