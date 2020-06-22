import React from "react";
import WordLink from "components-shared/WordLink";
import Link from "components-shared/Link";
import Button from "components-shared/Button";

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
      <Button>Default Button</Button>
      <div style={{ backgroundColor: "black", padding: "20px" }}>
        <Button appearance="alt">Alt style Button</Button>
      </div>
    </div>
  );
};

export default Home;
