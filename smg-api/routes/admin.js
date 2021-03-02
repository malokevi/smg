var express = require('express');
var router = express.Router();
const Shopify = require('shopify-api-node');
var Axios = require('axios')
const Product = require("../models/products");

const shopify = new Shopify({
  shopName: 'sleep-management-group',
  apiKey: '4faf1579bff229248a4f2ed80258d550',
  password: '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'
});

router.post('/createproduct', function(req, res, next) {
    console.log('see results', req.body)
    
    const newProduct = new Product({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        price: req.body.price,
        discountPrice : req.body.disacountPrice,
        weight : req.body.weight,
        dimensions : req.body.dimensions,
        quantity : req.body.quantity
      });
});

module.exports = router;
