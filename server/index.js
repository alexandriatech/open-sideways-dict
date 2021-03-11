require("dotenv").config();
const express = require("express");
const cors = require('cors');
const server = require("./graphql");
const port = process.env.PORT || 4000;
const path = require("path");
const publicFolder = "../build";

const WHITELIST_URLS = [process.env.FRONTEND_URL || 'https://opensideways.herokuapp.com', 'https://upbeat-hawking-111d88.netlify.app']
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || WHITELIST_URLS.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

const app = express();

app.use(cors(corsOptions))

server.applyMiddleware({ app });

app.use(express.static(path.join(__dirname, publicFolder)));

app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, `${publicFolder}/index.html`));
});

app.listen({ port: port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
