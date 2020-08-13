import React, { useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import Button from "components-shared/Button";
import Heading from "components-shared/Heading";
import Input from "components-shared/Input";
import InputTag from "components-shared/InputTag";

const GET_WORD_DATA = gql`
  query WORD($word: String!) {
    getWordByWord(word: $word) {
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
  const _className = classNames(className, styles.addDefPage);

  //   TODO: implement
  if (loading) return null;
  if (error) return `Error! ${error}`;
  // let noWordsText;
  let renderMain;

  const { getWordByWord } = data;

  if (!getWordByWord) renderMain = <p>{word} not found!</p>;
  else {
    renderMain = (
      <>
        <Heading> Add Def for {word}</Heading>
        <form>
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
