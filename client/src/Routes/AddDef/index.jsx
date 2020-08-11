import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";

const GET_WORD_DATA = gql`
  query WORD($word: String!) {
    getWordByWord(word: $word) {
      id
    }
  }
`;

const AddDef = ({ className }) => {
  const { word } = useParams();
  const { loading, error, data } = useQuery(GET_WORD_DATA, {
    variables: { word },
  });
  const _className = classNames(className, styles.addDefPage);

  //   TODO: implement
  if (loading) return null;
  if (error) return `Error! ${error}`;
  let noWordsText;

  const { getWordByWord } = data;

  if (!getWordByWord) noWordsText = `${word} not found!`;

  return (
    <div className={_className}>
      Add Def for {word}
      <p>{noWordsText}</p>
    </div>
  );
};

AddDef.propTypes = {
  className: PropTypes.string,
};

export default AddDef;
