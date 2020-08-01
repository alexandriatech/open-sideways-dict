import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

function WordLink({ className, hideIfNoMatch, link, userInput, word }) {
  const [text, hasMatch] = useMemo(() => {
    let matches = 0;
    const copyUserInput = userInput.toUpperCase();
    const wordCaps = word.toUpperCase();
    const rendereableText = [];
    let potentionFullMatchSpread = [];

    // first we try to match letters that are consecutive
    const consecutiveSearch = wordCaps.indexOf(copyUserInput);
    let currUserInputLetter = 0;
    if (consecutiveSearch !== -1) {
      matches++;
      const endOfSearch = consecutiveSearch + copyUserInput.length;
      rendereableText.push(
        <span key="wordbeginning" className={styles.transparent}>
          {word.substring(0, consecutiveSearch)}
        </span>
      );
      rendereableText.push(
        <span key="wordmiddle" className={styles.highlightedConsecutive}>
          {word.substring(consecutiveSearch, endOfSearch)}
        </span>
      );
      rendereableText.push(
        <span key="wordend" className={styles.transparent}>
          {word.substring(endOfSearch)}
        </span>
      );
    }
    // else we try to match letters that may be spread
    else {
      for (let i = 0; i < word.length; i++) {
        const capitalLetter = wordCaps[i];
        if (copyUserInput[currUserInputLetter] === capitalLetter) {
          potentionFullMatchSpread.push(
            <span key={`letter-${i}`} className={styles.highlighted}>
              {word[i]}
            </span>
          );
          currUserInputLetter =
            (currUserInputLetter + 1) % copyUserInput.length;
          if (currUserInputLetter === 0) {
            rendereableText.push(
              <span
                key={`group-${rendereableText.length}`}
                className={styles.activate}
              >
                {[...potentionFullMatchSpread]}
              </span>
            );
            potentionFullMatchSpread = [];
            matches++;
          }
        } else {
          potentionFullMatchSpread.push(
            <span key={`letter-${i}`} className={styles.transparent}>
              {word[i]}
            </span>
          );
        }
      }
      // add the rest without highlight
      rendereableText.push(
        <span key={`group-${rendereableText.length}`}>
          {[...potentionFullMatchSpread]}
        </span>
      );
    }
    return [rendereableText, matches];
  }, [word, userInput]);

  const _className = classNames(className, styles.link);

  if (userInput.length && hideIfNoMatch && !hasMatch) return "";

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
