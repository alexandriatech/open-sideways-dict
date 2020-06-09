require("dotenv").config();
const express = require("express");
const server = require("./graphql");
const port = process.env.PORT || 4000;
const path = require("path");
const publicFolder = "../build";

const app = express();
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
