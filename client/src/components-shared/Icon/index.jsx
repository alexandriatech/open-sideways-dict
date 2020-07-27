import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Icon = ({ border, className, height, onClick, round, src, width }) => {
  const _className = classNames(className, styles.icon, {
    [styles.border]: border,
    [styles.round]: round,
  });
  const _style = {
    ...(src ? { backgroundImage: `url(${src})` } : {}),
    height: height || width,
    width: width,
  };

  return <div style={_style} className={_className} onClick={onClick}></div>;
};

Icon.propTypes = {
  border: PropTypes.bool,
  className: PropTypes.string,
  //   TODO: josue - add support for numbers (px)
  //   height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.string,
  onClick: PropTypes.func,
  round: PropTypes.bool,
  src: PropTypes.string,
  //   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
};

Icon.defaultProps = {
  onClick: () => {},
};

export default Icon;
