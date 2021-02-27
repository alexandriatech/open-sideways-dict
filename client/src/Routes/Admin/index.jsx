import React from "react";
// import styles from "./styles.module.scss";
// import classNames from "classnames";
// import PropTypes from "prop-types";
// import Link from "components-shared/Link";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_UNPUBLISHED_WORDS = gql`
  query {
    allWords(input: { sortBy: createdAt }) {
      id
      word
      createdAt
      isPublish
    }
    getAllUsers {
      username
      role
      email
    }
  }
`;

function Admin() {
  const { loading, error, data } = useQuery(GET_UNPUBLISHED_WORDS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>My bad... but {error}</p>;
  console.log(data);
  return <div>Check log</div>;
}

export default Admin;
