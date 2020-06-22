import React from "react";
import WordLink from "components-shared/WordLink";
import Link from "components-shared/Link";

const Home = () => {
  return (
    <div>
      This is the homepage of this 'simple' example; explore the other links for
      stuff. or look at my{" "}
      <a href="https://github.com/josuerojasrojas/express-graphql-react-boilerplate">
        code
      </a>
      <WordLink userInput="Education" word="Education" link="/dummyLink" />
      <Link appearance="default" href={"/"}>
        Test Link Default appearance
      </Link>
      <Link appearance="alt" href={"/"}>
        Test Link Alt appearance
      </Link>
      <Link appearance="none" href={"/"}>
        Test Link none appearance
      </Link>
    </div>
  );
};

export default Home;
