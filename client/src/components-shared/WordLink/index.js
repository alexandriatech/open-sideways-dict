import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

// props: keyInput (letters), wordLink, word
// className underline according to letters props

function WordLink({ letterInput, word, link }) {
  let span = letterInput;
  let string = word.split(letterInput);
  string.shift();
  let [back] = string;

  return (
    <a className={styles.link} href={link}>
      <span className={styles.currentLetter}>{span}</span>
      {back}
    </a>
  );
}

WordLink.propTypes = {
  word: PropTypes.string,
  link: PropTypes.string,
  letterInput: PropTypes.string,
};

export default WordLink;
