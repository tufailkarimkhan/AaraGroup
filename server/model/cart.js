const mongoose = require("mongoose");
const Product = require("./product");
const { Schema } = mongoose;

const cart = new Schema({
  Product: [{ type: Schema.Types.ObjectId, ref: "Product" }],

  Quantity: {
    Type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Cart", cart);
