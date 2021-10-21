const express = require("express");
const bodyparser = require("body-parser");
const connectDB = require("./server/database/promiseConnection");
const route = require("./server/routes/router");

const PORT = process.env.PORT || 3000;
const server = express();

server.use(bodyparser.urlencoded({ extended: true }));

server.use("/", route);
server.listen(PORT, () => {
  connectDB();
  console.log("Server is Listening");
});
