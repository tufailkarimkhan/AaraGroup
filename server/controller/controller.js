const Product = require("../model/product");
const cart = require("../model/cart");

// Adding product to databas //Here i write some text for testing of fork
exports.addProduct = async (req, res) => {
  const productInfo = ({ name, price, description, imgUrl } = req.body);

  const product = new Product(productInfo);

  try {
    const savedProduct = await product.save();
    res.json({ status: 1, savedProduct });
  } catch (err) {
    console.log(err);
    res.json({ status: 0, message: err });
  }
};

exports.addToCart = (req, res) => {
  const cartData = ({ quantity } = req.body);

  Product.findOne({ name: req.body.name }).then((Data) => {
    cartData.productID = Data._id;
    const cartinfo = new cart(cartData);
    cartinfo
      .save()
      .find()
      .populate("productID", "-description")
      .then((showData) => {
        console.log(showData);
        res.json({ status: 1, Data: showData });
      })
      .catch((err) => {
        res.json({ status: 0, message: err });
      });
  });
};
