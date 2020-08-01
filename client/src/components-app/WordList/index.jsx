import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Heading from "components-shared/Heading";
import WordEntry from "components-app/WordEntry";

const WordList = ({ className, headingText, noWordsText, words }) => {
  const _className = classNames(className, styles.wordList);
  return (
    <div className={_className}>
      <Heading>{headingText}</Heading>
      {noWordsText ||
        words.map(({ definition, id, tags, user, votes, word }, i) => (
          <WordEntry
            className={styles.wordEntry}
            definition={definition}
            id={id}
            key={`word-${i}`}
            tags={tags}
            userId={user ? user.id : null}
            username={user ? user.username : null}
            votes={votes}
            word={word}
          />
        ))}
    </div>
  );
};

WordList.propTypes = {
  className: PropTypes.string,
  headingText: PropTypes.string,
  noWordsText: PropTypes.string,
  words: PropTypes.arrayOf(PropTypes.shape({ ...WordEntry.propTypes })),
};

export default WordList;
