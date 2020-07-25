import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.scss";

const CursorPlaceholder = ({ className, onClick }) => {
  const _className = classNames(className, styles.cursor);

  return (
    <div className={_className} onClick={onClick}>
      |
    </div>
  );
};

CursorPlaceholder.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default CursorPlaceholder;
