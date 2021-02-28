import React from "react";
// import styles from "./styles.module.scss";
// import classNames from "classnames";
// import PropTypes from "prop-types";
// import Link from "components-shared/Link";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import WordTab from './WordTab';
import UserTab from './UserTab';

const GET_UNPUBLISHED_WORDS = gql`
  query {
    allWords(input: { sortBy: isPublish }) {
      id
      word
      createdAt
      isPublish
    }
    getAllUsers {
      id
      username
      role
      email
    }
  }
`;

function Admin() {
  const { loading, error, data } = useQuery(GET_UNPUBLISHED_WORDS, {
    fetchPolicy: "network-only",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>My bad... but {error}</p>;

  const { allWords = [], getAllUsers = [] } = data;
  
  return <>
    <WordTab words={allWords} />
    <UserTab users={getAllUsers} />
    </>
}

export default Admin;
