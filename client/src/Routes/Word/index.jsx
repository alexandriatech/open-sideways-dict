import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import WordList from "components-app/WordList";
import GradientBottom from "components-shared/GradientBottom";
import {
  ENTRIES_FOUND,
  NO_ENTRIES_TEXT,
  NO_WORD_TEXT,
  QUERY_ERROR,
} from "constants/index";

const GET_WORD_DATA = gql`
  query WORD($word: String!) {
    getWordByWord(word: $word) {
      relatedTerms {
        word
      }
      wordData {
        id
        definition
        votes
        user {
          id
          username
        }
        tags {
          tag
        }
      }
    }
  }
`;

const Word = ({ className }) => {
  const { word } = useParams();
  const { loading, error, data } = useQuery(GET_WORD_DATA, {
    variables: { word },
    fetchPolicy: "no-cache",
  });
  const _className = classNames(className, styles.wordPage, "pageContainer");

  //   TODO: implement
  if (loading) return null;
  if (error) return QUERY_ERROR`${error}`;
  let noWordsText;
  let wordList;
  const { getWordByWord } = data;

  if (!getWordByWord) noWordsText = NO_WORD_TEXT`${word}`;
  else if (!getWordByWord.wordData.length)
    noWordsText = NO_ENTRIES_TEXT`${word}`;
  else wordList = getWordByWord.wordData;

  return (
    <div className={_className}>
      <WordList
        headingText={ENTRIES_FOUND`${word}`}
        noWordsText={noWordsText}
        words={wordList}
        word={word}
      />
      <GradientBottom />
    </div>
  );
};

Word.propTypes = {
  className: PropTypes.string,
};

export default Word;
