import ApolloClient from "apollo-boost";
import { STORAGE_JWT } from "constants/index";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_HEROKU || "/graphql",
  request: (operation) => {
    const token = localStorage.getItem(STORAGE_JWT);
    token &&
      operation.setContext({
        headers: {
          authorization: token,
        },
      });
  },
});
export default client;
