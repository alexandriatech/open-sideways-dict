import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.scss";

const TextInput = React.forwardRef(
  ({ className, onChange, type, value, ...props }, ref) => {
    const _className = classNames(className, styles.input);

    return (
      <input
        {...props}
        className={_className}
        onChange={onChange}
        type={type}
        value={value}
        ref={ref}
      />
    );
  }
);

TextInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

TextInput.defaultProps = {
  type: "text",
};

export default TextInput;
