import React from "react";
import classNames from "classnames";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import WordList from "components-app/WordList";

const GET_TAG_DATA = gql`
  query TAG($tag: String!) {
    getTagByTag(tag: $tag) {
      wordsDefs {
        id
        definition
        votes
        user {
          id
          username
        }
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

const Tag = ({ className }) => {
  const { tag } = useParams();
  const { loading, error, data } = useQuery(GET_TAG_DATA, {
    variables: { tag },
  });
  const _className = classNames(className, styles.tagPage, "pageContainer");

  //   TODO: implement
  if (loading) return null;
  if (error) return `Error! ${error}`;
  let noWordsText;
  let wordList;
  const { getTagByTag } = data;

  if (!getTagByTag) noWordsText = `${tag} not found!`;
  else if (!getTagByTag.wordsDefs.length)
    noWordsText = `no entries found for ${tag}`;
  else wordList = getTagByTag.wordsDefs;

  return (
    <div className={_className}>
      <WordList headingText={tag} noWordsText={noWordsText} words={wordList} />
    </div>
  );
};

export default Tag;
