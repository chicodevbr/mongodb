const mongoose = require('mongoose');
const db = require('./config');

const Product = require('./models/product');

const url = db.url;

mongoose
  .connect(url)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(() => {
    console.log('Connection failed');
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  const result = createdProduct.save();

  res.json(result);
};

exports.createProduct = createProduct;
