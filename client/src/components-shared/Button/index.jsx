import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Button = ({
  appearance,
  children,
  className,
  diameter,
  onClick,
  type,
}) => {
  const _className = classNames(className, styles.button, styles[appearance], {
    [styles.round]: diameter,
  });
  const _style = {
    ...(diameter ? { width: `${diameter}px`, height: `${diameter}px` } : {}),
  };

  return (
    <button className={_className} style={_style} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  appearance: PropTypes.oneOf(["default", "alt"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  // if diameter is present then it becomes round
  diameter: PropTypes.number,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  appearance: "default",
  onClick: () => {},
  type: "button",
};

export default Button;
