import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import Heading from "components-shared/Heading";
import { ABOUT_TITLE, ABOUT_BODY } from "constants/index";

const About = ({ className }) => (
  <div className={classNames(className, styles.aboutPage, "pageContainer")}>
    <Heading>{ABOUT_TITLE}</Heading>
    {ABOUT_BODY}
  </div>
);

About.propTypes = {
  className: PropTypes.string,
};

export default About;
