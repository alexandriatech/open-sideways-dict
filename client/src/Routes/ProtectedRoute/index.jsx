import React from "react";
import PrivateQueryExample from "components-app/PrivateQueryExample";

const ProtectedRoute = () => {
  return (
    <div>
      This is a protected route. If you are here the query here without login in
      then the query should render an error
      <br></br>
      <PrivateQueryExample />
    </div>
  );
};

export default ProtectedRoute;
