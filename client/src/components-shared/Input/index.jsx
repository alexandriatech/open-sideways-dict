import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const Input = ({
  className,
  hasError,
  name,
  onChange,
  onEnter,
  type,
  value,
  ...otherProps
}) => {
  const onKeyPress = (e) => e.key === "Enter" && onEnter && onEnter(e);

  return (
    <label
      className={classNames(className, styles.input, {
        [styles.hasError]: hasError,
      })}
      htmlFor={name}
    >
      {name}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        {...otherProps}
      />
    </label>
  );
};

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  className: PropTypes.string,
  hasError: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
