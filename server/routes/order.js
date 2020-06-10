'use strict';

const { Router } = require('express');
const router = new Router();

const Product = require('./../models/product');
const Order = require('./../models/order');

router.post('/', (req, res, next) => {
  const { basket } = req.body;
  console.log(basket);
  const productIds = [...basket].map((item) => item.product);
  let list = [];
  Product.find({ _id: productIds })
    .then((result) => {
      list = [...list, ...result];
      //console.log(basket);
      // snacks = result;
      //console.log('snacks', snacks);
      const totalAmount = list.reduce((sum, article) => {
        const quantity = basket.find((item) => item.product === article._id.toString()).quantity;
        return sum + article.price.amount * quantity;
      }, 0);
      // totalAmount += subTotal;
      return Order.create({
        basket,
        total: {
          amount: totalAmount,
          currency: list[0].price.currency
        }
      });
    })
    .then((order) => {
      res.json({ order });
    })
    .catch((error) => next(error));
});

router.get('/list', (req, res, next) => {
  Order.find()
    .populate({ path: 'basket.product' })
    .then((orders) => {
      //allProducts = [...allProducts, ...result];
      console.log(orders.basket);
      //res.json({ allOrders, allProducts });
      res.json({ orders });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  const orderId = req.params.id;
  //let allProductIds;
  // let allProducts = [];
  // let order;
  Order.findById(orderId)
    .populate({ path: 'basket.product' })
    .then((order) => {
      console.log(order);
      //      allProducts = [...allProducts, ...result];
      res.json({ order });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
