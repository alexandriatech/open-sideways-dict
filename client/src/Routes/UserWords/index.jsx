import React from "react";
import classNames from "classnames";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import WordList from "components-app/WordList";
import GradientBottom from "components-shared/GradientBottom";
import {
  USER_ENTRIES_FOUND,
  USER_NO_ENTRIES,
  USER_NOT_FOUND,
} from "constants/index";

const GET_ALL_WORDS = gql`
  query User($id: Int!) {
    getUser(id: $id) {
      username
      wordDefs {
        id
        definition
        votes
        word {
          word
        }
        tags {
          tag
        }
      }
    }
  }
`;

const UserWords = ({ className }) => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ALL_WORDS, {
    variables: { id: parseInt(id) },
  });
  const _className = classNames(className, styles.userPage, "pageContainer");

  //   TODO: implement
  if (loading) return null;
  if (error) return `Error! ${error}`;

  let noWordsText;
  let wordList;
  const { getUser } = data;

  if (!getUser) noWordsText = USER_NOT_FOUND;
  else if (!getUser.wordDefs.length)
    noWordsText = USER_NO_ENTRIES`${getUser.username}`;
  else wordList = getUser.wordDefs;

  return (
    <div className={_className}>
      <WordList
        headingText={getUser && USER_ENTRIES_FOUND`${getUser.username}`}
        noWordsText={noWordsText}
        words={wordList}
      />
      <GradientBottom />
    </div>
  );
};

export default UserWords;
