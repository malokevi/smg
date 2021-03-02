var express = require('express');
var router = express.Router();
const Shopify = require('shopify-api-node');
var Axios = require('axios')

const shopify = new Shopify({
  shopName: 'sleep-management-group',
  apiKey: '4faf1579bff229248a4f2ed80258d550',
  password: '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'
});

router.get('/createcheckout', function(req, res, next) {
    console.log(req.query.checkout, 'seecheckout')
    Axios.post(`https://4faf1579bff229248a4f2ed80258d550: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@sleep-management-group.myshopify.com/admin/api/2020-07/checkouts.json`, {
        "checkout" : req.query.checkout
    },
    {
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": "6b9c4d177659b8b18584f57d7da7444c"
        }
    }).
    then(result => {
        console.log('result data', result.data)
    })
    .catch(err => {
      console.log(err, 'collection err')
    })
});

//---------------- todo --------------------
// router.get('/product', function(req, res, next) {
//   var id = req.query.id
//   shopify.product.get(id)
//   .then(product => {
//     res.send(product)
//   })
//   .catch(err => res.send(err))
// });

// router.get('/productlist', function(req, res, next) {
//   var ids = typeof req.query.ids === 'undefined' ? [] : req.query.ids
//   let promises = [];

//   for (let i = 0; i < ids.length; i++) {
//     promises.push(shopify.product.get(ids[i]).then(list => list))
//   }

//   Promise.all(promises).then(values => {
//     res.send(values)
//   }).catch(err => {
//     console.log(err, 'product list error')
//   });
// });

module.exports = router;
