import React, { useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import Button from "components-shared/Button";
import Heading from "components-shared/Heading";
import Input from "components-shared/Input";
import InputTag from "components-shared/InputTag";
import { Redirect } from "react-router-dom";

const GET_WORD_DATA = gql`
  query WORD($word: String!) {
    getWordByWord(word: $word) {
      id
    }
  }
`;

const ADD_DEF_WORD = gql`
  mutation($wordInput: AddWordInput!) {
    addWordDef(wordDef: $wordInput) {
      id
    }
  }
`;

const AddDef = ({ className }) => {
  const { word } = useParams();
  const [defValue, setDefValue] = useState({
    value: "",
    hasError: false,
    dirty: false,
  });
  const [tagValue, setTagValue] = useState([]);
  const { loading, error, data } = useQuery(GET_WORD_DATA, {
    variables: { word },
  });
  const [
    addDefMutation,
    { data: addDefMutationData, addDefMutationLoading, addDefMutationError },
  ] = useMutation(ADD_DEF_WORD);
  const _className = classNames(className, styles.addDefPage, "pageContainer");

  //   TODO: implement
  if (loading || addDefMutationLoading) return null;
  if (error || addDefMutationError) return `Error! ${error}`;
  // let noWordsText;
  let renderMain;

  const { getWordByWord } = data;

  const onSubmit = (e) => {
    e.preventDefault();
    if (defValue.dirty && !defValue.hasError)
      addDefMutation({
        variables: {
          wordInput: {
            word_id: getWordByWord.id,
            definition: defValue.value,
            tags: tagValue,
          },
        },
      });
    // TODO: implement error
    else console.log("has error missing field");
  };

  if (addDefMutationData) {
    return <Redirect to={`/share/${addDefMutationData.addWordDef.id}`} />;
  }
  if (!getWordByWord) renderMain = <p>{word} not found!</p>;
  else {
    renderMain = (
      <>
        <Heading> Add Def for {word}</Heading>
        <form onSubmit={onSubmit}>
          <Input className={styles.input} name="Word" value={word} readOnly />
          <Input
            className={styles.input}
            name="Definition"
            value={defValue.value}
            onChange={(e) => {
              const value = e.target.value;
              setDefValue({
                value: value,
                hasError: !value.length,
                dirty: true,
              });
            }}
          />
          <InputTag
            className={styles.input}
            name={"Tags (max 5)"}
            tags={tagValue}
            onChange={setTagValue}
            maxTags={5}
          />
          <Button type={"submit"} appearance="alt">
            Submit
          </Button>
        </form>
      </>
    );
  }

  return <div className={_className}>{renderMain}</div>;
};

AddDef.propTypes = {
  className: PropTypes.string,
};

export default AddDef;
