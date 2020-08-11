import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

const AddWord = ({ className }) => {
  const _className = classNames(className, styles.addDefPage);

  return <div className={_className}>AddWord</div>;
};

AddWord.propTypes = {
  className: PropTypes.string,
};

export default AddWord;
