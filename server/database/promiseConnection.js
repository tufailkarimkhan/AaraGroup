const mongoose = require("mongoose");
const URI =
  process.env.URI ||
  " mongodb+srv://CRUDtest:crud123@cluster0.vjuat.mongodb.net/users?retryWrites=true&w=majority";

const connectDB = () => {
  mongoose
    .connect(URI, { useUnifiedTopology: true })
    .then((data) => {
      console.log(`MongoDB connected: ${data.connection.host}`);
      console.log("After Connection");
    })
    .catch((err) => {
      console.log(err);
      process.exit();
    });
};

module.exports = connectDB;
