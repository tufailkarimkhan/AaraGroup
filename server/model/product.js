const mongoose = require("mongoose");
const { Schema } = mongoose;

const product = new Schema({
  name: {
    type: string,
    required: true,
    mingLength: 3,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
  },
});
module.exports = mongoose.model("product", product);
