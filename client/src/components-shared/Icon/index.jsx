import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Icon = ({ className, height, onClick, src, width }) => {
  const _className = classNames(className, styles.icon);
  const _style = {
    ...(src ? { backgroundImage: `url(${src})` } : {}),
    height: height || width,
    width: width,
  };

  return <div style={_style} className={_className} onClick={onClick}></div>;
};

Icon.propTypes = {
  className: PropTypes.string,
  //   TODO: josue - add support for numbers (px)
  //   height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.string,
  onClick: PropTypes.func,
  src: PropTypes.string,
  //   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
};

Icon.defaultProps = {
  onClick: () => {},
};

export default Icon;
