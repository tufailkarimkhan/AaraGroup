const express = require("express");
const bodyparser = require("body-parser");
const connectDB = require("./server/database/promiseConnection");

const PORT = process.env.PORT || 3000;
const server = express();

server.listen(PORT, () => {
  connectDB();
  console.log("Server is Listening");
});
