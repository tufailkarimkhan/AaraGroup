const express = require("express");
const route = express.Router();
const { addProduct, addToCart } = require("../controller/controller");

route.post("/addProduct", addProduct);

route.post("/addToCart", addToCart);

module.exports = route;
