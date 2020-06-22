import React from "react";
import WordLink from "components-shared/WordLink";
import Link from "components-shared/Link";
import Button from "components-shared/Button";
import Icon from "components-shared/Icon";
import styles from "./styles.module.scss";

import ArrowRight from "assets/arrow-right.svg";
// import ArrowRightAlt from "assets/arrow-right-alt.svg";

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
      <Button diameter={32}>
        <Icon src={ArrowRight} width="23px" />
      </Button>
      <div style={{ backgroundColor: "black", padding: "20px" }}>
        <Button appearance="alt">Alt style Button</Button>
        <Button className={styles.altArrow} appearance="alt" diameter={32}>
          <Icon className={styles.altArrowIcon} width="23px" />
        </Button>
        This icon button to also transition but instead of passing a src we
        define the image in the scss which we can then create our own hover
        change. The idea is to use icon to define sizes and basic styling but we
        can truly control states like hover in the home page to make it truly do
        what we want.
      </div>
    </div>
  );
};

export default Home;
