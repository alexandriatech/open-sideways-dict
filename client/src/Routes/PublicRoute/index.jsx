import React from "react";
import PublicQueryExample from "components-app/PublicQueryExample";

const PublicRoute = () => {
  return (
    <div>
      This is a public route. It should render the query wether you are logged
      in or not.
      <br></br>
      <PublicQueryExample />
    </div>
  );
};

export default PublicRoute;
