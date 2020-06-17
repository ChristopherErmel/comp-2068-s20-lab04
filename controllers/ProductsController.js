const viewPath = ('products');
const Product = require('../models/product');

exports.show = async (req, res) => {
  const product = await Product.findById(req.params.id);
    res.render(`${viewPath}/show`, {
        pageTitle: product.name,
        product: product
  });
};

exports.new = (req, res) => {
  res.render(`${viewPath}/new`, {
    pageTitle: 'New Product'
  });
};

exports.create = async (req, res) => {
    try{
      //this const is to allow us to grab the id from the product info to use for the blog id show page...
      const product = await Product.create(req.body);
      //this will redirect the user to a different page.
      res.redirect(`/products/${product.id}`);
  } catch (err){
      res.send(`Error: ${err}`);
  };
};