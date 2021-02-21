import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Heading from "components-shared/Heading";
import Button from "components-shared/Button";
import WordEntry from "components-app/WordEntry";
import { UserContext } from "components-app/UserContextProvider";


const WordList = ({ className, headingText, noWordsText, words, word }) => {
  const { user } = useContext(UserContext);
  const _className = classNames(className, styles.wordList);

  return (
    <div className={_className}>
      <Heading>{headingText}</Heading>
      {!!user && !!word && <div className={styles.newEntryButton}>
        <Button appearance="alt" link={`/addDef/${word}`}>New Entry</Button>
      </div>}
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
            user={user}
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
  word: PropTypes.string
};

export default WordList;
