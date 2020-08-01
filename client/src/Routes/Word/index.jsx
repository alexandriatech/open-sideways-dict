import React from "react";
import classNames from "classnames";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import WordList from "components-app/WordList";

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
  });
  const _className = classNames(className, styles.wordPage);

  //   TODO: implement
  if (loading) return null;
  if (error) return `Error! ${error}`;
  let noWordsText;
  let wordList;
  const { getWordByWord } = data;

  if (!getWordByWord) noWordsText = `${word} not found!`;
  else if (!getWordByWord.wordData.length)
    noWordsText = `no entries found for ${word}`;
  else wordList = getWordByWord.wordData;

  return (
    <div className={_className}>
      <WordList headingText={word} noWordsText={noWordsText} words={wordList} />
    </div>
  );
};

export default Word;
