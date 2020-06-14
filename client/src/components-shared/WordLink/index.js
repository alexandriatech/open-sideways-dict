import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

// props: keyInput (letters), wordLink, word
// className underline according to letters props

function WordLink({ letterInput, word, link }) {
  let transparentText = word.split(letterInput);
  transparentText.shift();
  // remove opacity from the wor
  // if null or "" transparent
  return (
    <a className={styles.link} href={link}>
      {letterInput ? (
        <>
          <span className={styles.highlighted}>{letterInput}</span>
          <span className={styles.transparent}>{transparentText}</span>
        </>
      ) : (
        <span>{word}</span>
      )}
    </a>
  );
}

WordLink.propTypes = {
  word: PropTypes.string,
  link: PropTypes.string,
  letterInput: PropTypes.string,
};

export default WordLink;
