const { db } = require("../../../db");
const jwt = require("jsonwebtoken");
const { authenticateGoogle } = require("./googlepassport.js");

const authGoogle = async (_, { accessToken }, { req, res }) => {
  req.body = {
    ...req.body,
    access_token: accessToken,
  };
  try {
    const { data, info } = await authenticateGoogle(req, res);
    if (data) {
      // TODO: this should be replace with db values
      const email = data.profile.emails[0].value;
      const username = data.profile.displayName;
      // try to find user by email
      let userDB = await db.User.findOne({ where: { email } });
      if (!userDB) {
        const createdUser = await db.User.findCreateFind({
          where: {
            email,
            username,
          },
        });
        userDB = createdUser[0];
      }
      // finally add a webtoken to let a user signin
      userDB.token = jwt.sign(
        { username, email, id: userDB.id, role: userDB.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );
      return userDB;
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

module.exports = { authGoogle };
