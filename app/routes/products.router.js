const express = require('express');
const ProductsService = require('./../services/product.service');
const router = express.Router();
const service = new ProductsService();


router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.get('/filter', (req, res) => {
  res.json({
    message: 'filtro'
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  const result = service.delete(id);
  res.json(result);
});

module.exports = router;
