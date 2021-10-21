const mongoose = require("mongoose");
const URI =
  process.env.URI ||
  " mongodb+srv://CRUDtest:crud123@cluster0.vjuat.mongodb.net/users?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(URI, { useUnifiedTopology: true });
    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;
