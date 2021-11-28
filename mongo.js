const MongoClient = require('mongodb').MongoClient;

const db = require('./config');

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };

  const client = new MongoClient(db.url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection('products').insertOne(newProduct);
  } catch (error) {
    return res.json({ message: 'Could not store data.' });
  }

  res.json(newProduct);
};

const getProducts = async (req, res, next) => {
  const client = new MongoClient(db.url);

  let products;

  try {
    await client.connect();
    const db = client.db();

    products = await db.collection('products').find().toArray();
  } catch (error) {
    return res.json({ message: 'Could not retrieve products.' });
  }

  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
