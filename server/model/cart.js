const mongoose = require("mongoose");
const Product = require("./product");

const cart = new mongoose.Schema({
  productID: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },

  quantity: {
    Type: Number,
  },
});

module.exports = mongoose.model("Cart", cart);
