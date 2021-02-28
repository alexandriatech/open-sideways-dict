import React from "react";
import classNames from "classnames";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import Heading from "components-shared/Heading";
import Button from "components-shared/Button";
import { SHARE_TITLE } from "constants/index";

const GET_WORD_DATA = gql`
  query WORD($id: Int!) {
    getWordDef(id: $id) {
      word {
        word
      }
      definition
    }
  }
`;

const SUPPORTED_SHARE_BUTTONS_DATA = [
  {
    text: "Share Twitter",
    link: (message) => `https://twitter.com/intent/tweet?text=${message}`,
  },
  {
    text: "Share Facebook",
    link: (url) => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  },
];

const Share = ({ className }) => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_WORD_DATA, {
    variables: { id: parseInt(id) },
  });
  const _className = classNames(className, styles.wordPage, "pageContainer");
  let rendered, shareButtons;

  //   TODO: implement
  if (loading) return null;
  if (error) rendered = `${error}`;
  else {
    const { getWordDef } = data;
    if (!getWordDef) rendered = SHARE_TITLE;
    else {
      rendered = (
        <>
          <Heading>{getWordDef.word.word}</Heading>
          <p>{getWordDef.definition}</p>
        </>
      );
      const url = encodeURI(window.location.href);
      shareButtons = SUPPORTED_SHARE_BUTTONS_DATA.map(({ text, link }, i) => (
        <Button
          className={styles.shareButton}
          isExternalLink
          key={`share-${i}`}
          link={link(url)}
        >
          {text}
        </Button>
      ));
    }
  }

  return (
    <div className={_className}>
      <div className={styles.box}>{rendered}</div>
      {shareButtons}
    </div>
  );
};

export default Share;
