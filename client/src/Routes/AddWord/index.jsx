import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import Input from "components-shared/Input";

const AddWord = ({ className }) => {
  const _className = classNames(className, styles.addDefPage);

  return (
    <div className={_className}>
      <Input name="Word"></Input>
    </div>
  );
};

AddWord.propTypes = {
  className: PropTypes.string,
};

export default AddWord;
