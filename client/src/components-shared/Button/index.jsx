import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Button = ({
  appearance,
  children,
  className,
  isRound,
  onClick,
  type,
}) => {
  const _className = classNames(className, styles.button, styles[appearance], {
    [styles.round]: isRound,
  });

  return (
    <button className={_className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  appearance: PropTypes.oneOf(["default", "alt"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isRound: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  appearance: "default",
  onClick: () => {},
  type: "button",
};

export default Button;
