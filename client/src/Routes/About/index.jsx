import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import Heading from "components-shared/Heading";
import Link from "components-shared/Link";

const About = ({ className }) => (
  <div className={classNames(className, styles.aboutPage)}>
    <Heading>About Page</Heading>
    <p>
      Open Sideways Dictionary is inspired by the real{" "}
      <Link
        appearance="alt"
        color="white"
        hoverColor="white"
        isExternal
        href="https://sidewaysdictionary.com/"
      >
        Sideways Dictionary
      </Link>
      Alexandria team decided cloning this project would be a great opportunity
      to show case our skills and follows the vision of Alexandria. The point of
      this being open source is to allow others create sideways dictionary for
      other jargon that may be easier to understand with the support of
      contributors point of view. We have built a responsive front end client
      using react and graphql and Postgres for our backend. You can choose to
      implement quickly a different front end by choosing our already own
      architected backend.
    </p>
  </div>
);

About.propTypes = {
  className: PropTypes.string,
};

export default About;
