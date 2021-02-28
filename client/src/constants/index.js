import React from "react";
import Link from "components-shared/Link";

export const STORAGE_JWT = "jwt-token";

// NAV bar
export const NAV_TITLE = "Open Sideways Dictionary";

// LOGIN PAGE
export const HEADING_TEXT = "Please Login";
export const SUBHEADING_TEXT = "and explain the Finance World!";
export const SIGNIN_TEXT = "Sign in with Google";

// ABOUT PAGE
export const ABOUT_TITLE = "About";
export const ABOUT_BODY = (
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
    Alexandria team decided cloning this project would be a great opportunity to
    show case our skills and follows the vision of Alexandria. The point of this
    being open source is to allow others create sideways dictionary for other
    jargon that may be easier to understand with the support of contributors
    point of view. We have built a responsive front end client using react and
    graphql and Postgres for our backend. You can choose to implement quickly a
    different front end by choosing our already own architected backend.
    <br></br>
    <br></br>
    We are open to contributions: check out our list of issues and upcoming
    features at{" "}
    <Link
      appearance="alt"
      color="white"
      hoverColor="white"
      isExternal
      href="https://github.com/alexandriatech/behistun-inscription/issues"
    >
      github.com/alexandriatech/behistun-inscription/issues
    </Link>
    .
  </p>
);

// WORD PAGE
export const NO_WORD_TEXT = (_, word) => `${word} not found!`;
export const NO_ENTRIES_TEXT = (_, word) => `No entries found for ${word}`;
export const ENTRIES_FOUND = (_, word) => `Entries for ${word}`;
export const QUERY_ERROR = (_, error) => `Error! ${error}`;

// USER PAGE
export const USER_NOT_FOUND = `User not found!`;
export const USER_NO_ENTRIES = (_, username) =>
  `No entries found for user: ${username}`;
export const USER_ENTRIES_FOUND = (_, username) => `Entries by ${username}`;

// TAG PAGE
export const TAG_NOT_DOUND = (_, tag) => `Tag: ${tag} not found!`;
export const TAG_NO_ENTRIES = (_, tag) => `No entries found for tag: ${tag}`;
export const TAG_ENTRIES_FOUND = (_, tag) => `Entries with tag: ${tag}`;

// SHARE PAGE
export const SHARE_TITLE = "Definition to share not found!";

// NO MATCH PAGE
export const NO_PAGE_FOUND = "No Page Found";
