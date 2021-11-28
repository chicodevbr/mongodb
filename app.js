const express = require('express');
const mongo = require('./mongoose');

const app = express();

app.use(express.json());

app.post('/products', mongo.createProduct);

app.get('/products', mongo.getProducts);

app.listen(5002);
