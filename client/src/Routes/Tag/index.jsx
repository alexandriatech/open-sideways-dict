import React from "react";
import classNames from "classnames";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import WordList from "components-app/WordList";
import GradientBottom from "components-shared/GradientBottom";
import {
  TAG_NOT_DOUND,
  TAG_NO_ENTRIES,
  TAG_ENTRIES_FOUND,
} from "constants/index";

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

  if (!getTagByTag) noWordsText = TAG_NOT_DOUND`${tag}`;
  else if (!getTagByTag.wordsDefs.length) noWordsText = TAG_NO_ENTRIES`${tag}`;
  else wordList = getTagByTag.wordsDefs;

  const headingText = TAG_ENTRIES_FOUND`${tag}`;

  return (
    <div className={_className}>
      <WordList
        headingText={headingText}
        noWordsText={noWordsText}
        words={wordList}
      />
      <GradientBottom />
    </div>
  );
};

export default Tag;
