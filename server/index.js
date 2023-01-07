require("dotenv").config();
const colors = require("colors");
const express = require("express");
var cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
//used to connect GraphQl and express
const schema = require("./schema/schema");
const port = process.env.PORT || 5000;
const app = express();
const connectDB = require("./config/db");
app.use(cors());
//Connect to DataBase
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`server running on port ${port}`));
