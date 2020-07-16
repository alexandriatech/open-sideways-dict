import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import styles from "./styles.module.scss";

const GET_ALL_WORDS = gql`
  {
    allWords {
      id
      isPublish
      word
    }
  }
`;

const Home = ({ className, state, style }) => {
  const { loading, error, data } = useQuery(GET_ALL_WORDS);
  // TODO: handle loading
  if (loading) return "";
  // TODO: handle errors
  if (error) return `Error! ${error.message}`;

  console.log("data", data);
  return (
    <div className={styles[state] + ` ${className}`} style={style}>
      {data.allWords.map(({ word }) => (
        <div key={word}>{word}</div>
      ))}
    </div>
  );
};

export default Home;
