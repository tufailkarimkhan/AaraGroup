const Product = require("../model/product");
const cart = require("../model/cart");

// Adding product to databas //Here i write some text for testing of fork
exports.addProduct = async (req, res) => {
  const productInfo = ({ name, price, description, imgUrl } = req.body);

  const product = new Product(productInfo);

  try {
    const savedProduct = await product.save();
    res.json({ savedProduct });
  } catch (err) {
    console.log(err);
    res.json({ status: 0, message: err });
  }
};

// exports.addToCart = async (req,res)=>{
//     const cartDAta={req.body
//     console.log(cartDAta)

// }
