'use strict';

const { Router } = require('express');
const router = new Router();

const Craftbeer = require('./../models/craftbeer');
const Snack = require('./../models/snack');
const Brewingkit = require('./../models/brewingkit');
const Order = require('./../models/order');

router.post('/', (req, res, next) => {
  const { basket } = req.body;
  //let customer;
  let totalAmount = 0;
  const craftbeerIds = basket.map((item) => item.craftbeer);
  Craftbeer.find({ _id: craftbeerIds })
    .then((craftbeers) => {
      console.log(totalAmount);
      const subTotal = craftbeers.reduce((sum, article) => {
        const quantity = basket.find((item) => item.craftbeer === article._id.toString()).quantity;
        return sum + article.price.amount * quantity;
      }, 0);
      totalAmount += subTotal;
      return Order.create({
        basket,
        total: {
          amount: totalAmount,
          currency: craftbeers[0].price.currency
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
    .then((orders) => {
      res.json({ orders });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  const orderId = req.params.id;
  Order.findById(orderId)
    .then((order) => {
      res.json({ order });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
