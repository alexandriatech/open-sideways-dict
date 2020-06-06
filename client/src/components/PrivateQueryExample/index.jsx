import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_GREETING = gql`
  {
    greeting
    user {
      name
    }
  }
`;

const PrivateQueryExample = () => {
  const { loading, error, data } = useQuery(GET_GREETING, {
    fetchPolicy: "network-only",
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return `Good ${data.greeting} ${data.user.name}`;
};

export default PrivateQueryExample;
