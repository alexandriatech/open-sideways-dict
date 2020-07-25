import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

function WordLink({ className, hideIfNoMatch, link, userInput, word }) {
  const text = [];
  const copyUserInput = userInput.toUpperCase();
  let hasMatch = false;
  let currUserInputLetter = 0;

  for (let i = 0; i < word.length; i++) {
    const capitalLetter = word[i].toUpperCase();
    if (copyUserInput[currUserInputLetter] === capitalLetter) {
      hasMatch = true;
      text.push(
        <span key={`letter-${i}`} className={styles.highlighted}>
          {word[i]}
        </span>
      );
      currUserInputLetter = (currUserInputLetter + 1) % copyUserInput.length;
    } else {
      text.push(
        <span key={`letter-${i}`} className={styles.transparent}>
          {word[i]}
        </span>
      );
    }
  }

  const _className = classNames(className, styles.link, {
    [styles.noWordFound]: currUserInputLetter !== 0,
  });

  if (
    userInput.length &&
    hideIfNoMatch &&
    (!hasMatch || currUserInputLetter !== 0)
  )
    return "";

  return (
    <Link className={_className} to={link}>
      {text}
    </Link>
  );
}

WordLink.propTypes = {
  className: PropTypes.string,
  hideIfNoMatch: PropTypes.bool,
  link: PropTypes.string,
  userInput: PropTypes.string,
  word: PropTypes.string,
};

export default WordLink;
