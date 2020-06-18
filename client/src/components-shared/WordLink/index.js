import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";
import classNames from "classnames";

function WordLink({ userInput, word, link }) {
  let text = [];
  let copyUserInput = (userInput + "").toUpperCase();
  let currUserInputLetter = 0;

  for (let i = 0; i < word.length; i++) {
    const capitalLetter = word[i].toUpperCase();
    if (copyUserInput[currUserInputLetter] === capitalLetter) {
      text.push(<span className={styles.highlighted}>{word[i]}</span>);
      currUserInputLetter = (currUserInputLetter + 1) % copyUserInput.length;
    } else {
      text.push(<span className={styles.transparent}>{word[i]}</span>);
    }
  }

  return (
    <a
      className={classNames(styles.link, {
        [styles.noWordFound]: currUserInputLetter !== 0,
      })}
      href={link}
    >
      {text}
    </a>
  );
}

WordLink.propTypes = {
  word: PropTypes.string,
  link: PropTypes.string,
  letterInput: PropTypes.string,
};

export default WordLink;
