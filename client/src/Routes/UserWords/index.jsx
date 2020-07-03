import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";

const GET_ALL_WORDS = gql`
  query User($id: Int!) {
    getUser(id: $id) {
      username
      wordDefs {
        definition
        tags {
          tag
        }
        word {
          word
        }
      }
    }
  }
`;

const UserWords = () => {
  const { id } = useParams();
  console.log("props", id);
  const { loading, error, data } = useQuery(GET_ALL_WORDS, {
    variables: { id: parseInt(id) },
  });
  // TODO: handle loading
  if (loading) return "";
  // TODO: handle errors
  if (error) return `Error! ${error.message}`;
  console.log("data", data);

  return (
    <div>
      <div>user: {data.getUser.username}</div>
      {data.getUser.wordDefs.map(({ definition, word }) => (
        <div key={definition}>
          word: {word.word}; def: {definition}
        </div>
      ))}
    </div>
  );
};

export default UserWords;
