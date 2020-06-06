const { authenticateGoogle } = require("./googlepassport.js");
const jwt = require("jsonwebtoken");

// might seperate this function cause it's pretty big
const authGoogle = async (_, { accessToken }, { req, res }) => {
  req.body = {
    ...req.body,
    access_token: accessToken,
  };
  try {
    const { data, info } = await authenticateGoogle(req, res);
    if (data) {
      const name = `${data.profile.name.givenName} ${data.profile.name.familyName}`;
      return {
        token: jwt.sign({ name }, process.env.JWT_SECRET, { expiresIn: "1d" }),
        name: name,
      };
    }
    if (info) {
      switch (info.code) {
        case "ETIMEDOUT":
          return new Error("time out");
        default:
          return new Error("unexpected error");
      }
    }
    return new Error("server error");
  } catch (error) {
    return error;
  }
};

const Mutation = {
  authGoogle: authGoogle,
  exampleMutation: (_, { input }) => {
    return {
      key: "thisisakey",
      name: "thisisaname",
      input: input,
    };
  },
};

module.exports = Mutation;
