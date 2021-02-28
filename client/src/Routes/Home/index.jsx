import React, { useState, useRef } from "react";
import classNames from "classnames";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import styles from "./styles.module.scss";
import WordLink from "components-shared/WordLink";
import TextInput from "components-shared/TextInput";
import Icon from "components-shared/Icon";
import SearchIcon from "assets/search.svg"
import GradientBottom from "components-shared/GradientBottom";
import { Link } from "react-router-dom";;

const GET_ALL_WORDS = gql`
  {
    allWords(input: { isPublish: true }) {
      isPublish
      word
    }
  }
`;

const Home = ({ className, user }) => {
  const [wordSearch, setWordSearchValue] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const textInputRef = useRef(null);
  const { loading, error, data } = useQuery(GET_ALL_WORDS);
  const _className = classNames(className, styles.homePage, "pageContainer");

  // TODO: handle loading
  if (loading) return "";
  // TODO: handle errors
  if (error) return `Error! ${error.message}`;

  const toggleSearch = (nextState) => {
    const _nextState = nextState || wordSearch.length;
    setIsSearchActive(_nextState);
    if (_nextState) {
      textInputRef.current.blur();
      textInputRef.current.focus();
    }
  };

  return (
    <div className={_className}>
      <div className={styles.inputWrapper}>
        <TextInput
          autoCorrect="off"
          ref={textInputRef}
          value={wordSearch}
          className={classNames(
            { [styles.hide]: !isSearchActive },
            styles.input,
            styles.inputChild
          )}
          onChange={(e) => setWordSearchValue(e.target.value)}
          onBlur={() => toggleSearch(false)}
        />
        <Icon
          className={classNames(
            { [styles.hide]: isSearchActive },
            styles.searchIcon,
            styles.inputChild
          )}
          src={SearchIcon}
          onClick={() => toggleSearch(!isSearchActive)}
        />
      </div>

      <div className={styles.wordList}>
        {!data.allWords.length && <span></span>}
        {data.allWords.map(({ word }) => (
          <WordLink
            className={styles.wordLink}
            hideIfNoMatch
            key={word}
            link={`/word/${word}`}
            userInput={wordSearch}
            word={word}
          />
        ))}
      </div>
      {!!user && <Link className={styles.newWord} to={'/addWord'}>
        + new word
      </Link>}
      <div className={styles.noWordFound} onClick={() => toggleSearch(true)}>
        No Word found with search: {wordSearch}
      </div>
      <GradientBottom />
    </div>
  );
};

export default Home;
