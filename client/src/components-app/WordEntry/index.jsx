import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Link from "components-shared/Link";
import Icon from "components-shared/Icon";
import chevronUp from "assets/chevron-up.svg";
import chevronDown from "assets/chevron-down.svg";

const WordEntry = ({
  className,
  definition,
  id,
  tags,
  user,
  userId,
  username,
  votes,
  word,
}) => {
  const _className = classNames(className, styles.wordEntry);

  if (word) {
    word = typeof word === "string" ? word : word.word;
  }

  return (
    <div className={_className}>
      <div className={styles.definitionWrapper}>
        {!!word && (
          <div className={styles.word}>
            <Link
              appearance="alt"
              href={`/word/${word}`}
              className={styles.wordLink}
            >
              {word}
            </Link>
            <span className={styles.hyphen}>—</span>
          </div>
        )}
        <div className={styles.definition}>
          {"  "}
          {definition}
        </div>
      </div>
      <div className={classNames(styles.votes, {[styles.disabledVotes]: !!user})}>
        <Icon
          className={styles.icon}
          src={chevronUp}
          width={"18px"}
          border
          round
        />
        {votes}
        <Icon
          className={styles.icon}
          src={chevronDown}
          width={"18px"}
          border
          round
        />
      </div>
      <div className={styles.links}>
        {!!username && (
          <div className={styles.user}>
            by:{" "}
            <Link appearance="alt" href={`/user/${userId}`}>
              {username}
            </Link>
          </div>
        )}
        <div className={styles.tags}>
          {tags.map(({ tag }) => (
            <Link
              appearance={"alt"}
              className={styles.tag}
              key={id + tag}
              href={`/tag/${tag}`}
            >
              #{tag}
            </Link>
          ))}
        </div>
        <Link appearance={"alt"} href={`/share/${id}`}>
          Share
        </Link>
      </div>
    </div>
  );
};

WordEntry.propTypes = {
  className: PropTypes.string,
  definition: PropTypes.string,
  id: PropTypes.number,
  tags: PropTypes.array,
  user: PropTypes.any,
  userId: PropTypes.number,
  username: PropTypes.string,
  votes: PropTypes.number,
  word: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ word: PropTypes.string }),
  ]),
};

export default WordEntry;
