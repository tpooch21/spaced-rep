const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const dateFormat = require("dateformat");
const schema = require("./schema/schema");
dotenv.config();
const port = process.env.PORT;

const { graphqlHTTP } = require("express-graphql");

app.use(bodyParser.json());
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
