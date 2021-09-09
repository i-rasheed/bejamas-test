const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const data = require('../data.js');
const Product = require ('../models/productModel.js');


const productRouter = express.Router();


productRouter.get(
  '/categories',
  expressAsyncHandler(async (req, res) => {
    const categories = await Product.find().distinct('category');
    res.send(categories);
  })
);

productRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    const products = data.products;
      const createdProducts = await Product.insertMany(products);
      res.send({ createdProducts });
    } 
  )
);

productRouter.get('/all', expressAsyncHandler(async (req, res) => {
  const products = await Product.find()
  res.send({products})
}))

productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);



module.exports = productRouter;
