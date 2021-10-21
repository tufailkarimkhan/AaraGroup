const mongoose = require("mongoose");
const Product = require("./product");

const cart = new mongoose.Schema({
  Product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },

  Quantity: {
    Type: Number,
  },
});

module.exports = mongoose.model("Cart", cart);
