import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Heading = ({ className, children, type }) => {
  const _className = classNames(styles.heading, styles[type], className);

  const props = {
    className: _className,
    children,
  };

  return React.createElement(type, props);
};

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
};

Heading.defaultProps = {
  type: "h1",
};

export default Heading;
