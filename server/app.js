const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schema/schema");
const { Client } = require("pg");
const db = require("./config/dbConnection");
db.authenticate()
  .then(() => console.log("database is connected "))
  .catch((err) => console.log("Error: " + err));
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(4000, () => {
  console.log("listening on port 4000");
});
