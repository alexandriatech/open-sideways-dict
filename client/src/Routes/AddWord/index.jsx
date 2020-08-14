import React, { useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import Input from "components-shared/Input";
import Button from "components-shared/Button";
import { Redirect } from "react-router-dom";

const ADD_WORD = gql`
  mutation AddWord($word: String!) {
    addWord(word: $word) {
      id
      word
      isPublish
    }
  }
`;

const AddWord = ({ className }) => {
  const [wordValue, setWordValue] = useState({
    value: "",
    hasError: false,
    dirty: false,
  });
  const [addWord, { data, loading, error }] = useMutation(ADD_WORD);

  const _className = classNames(className, styles.addWord, "pageContainer");

  //   (josue: TODO) loading state
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data) return <Redirect to={`/word/${wordValue.value.toLowerCase()}`} />;

  const onSubmit = (e) => {
    e.preventDefault();
    if (wordValue.dirty && !wordValue.hasError)
      addWord({ variables: { word: wordValue.value } });
    else console.log("hass error missing field");
  };

  return (
    <div className={_className}>
      <form onSubmit={onSubmit}>
        <Input
          name="New Word"
          value={wordValue.value}
          hasError={wordValue.hasError}
          onChange={(e) => {
            const value = e.target.value;
            setWordValue({
              value: value,
              hasError: !value.length,
              dirty: true,
            });
          }}
        ></Input>
        <Button type={"submit"} appearance="alt">
          Submit
        </Button>
      </form>
    </div>
  );
};

AddWord.propTypes = {
  className: PropTypes.string,
};

export default AddWord;
