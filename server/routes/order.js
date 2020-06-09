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
/*   let craftbeers;
  let snacks;
  let brewingkits; */
  // let totalAmount = 0;
  const productIds = basket.map(item => item.product);
  const craftbeerIds = basket.filter(item => item.type === 'craftbeer').map(item => item.product);
  const snackIds = basket.filter(item => item.type === 'snack').map(item => item.product);
  const brewingkitIds = basket.filter(item => item.type === 'brewingkit').map(item => item.product);
  console.log('craftbeers', craftbeerIds, 'snacks', snackIds, 'brewingkit', brewingkitIds);
  let list = [];
  Craftbeer.find({ _id: productIds })
    .then(result => {
      list = [...list, ...result];
      // craftbeers = result;
      // //console.log(craftbeers);
      // const subTotal = craftbeers.reduce((sum, article) => {
      //   const quantity = basket.find(item => item.product === article._id.toString()).quantity;
      //   return sum + article.price.amount * quantity;
      // }, 0);
      // totalAmount += subTotal;
      return Snack.find({ _id: productIds });
    })
    .then(result => {
      list = [...list, ...result];

      // snacks = result;
      // //console.log('snacks', snacks);
      // const subTotal = snacks.reduce((sum, article) => {
      //   const quantity = basket.find(item => item.product === article._id.toString()).quantity;
      //   return sum + article.price.amount * quantity;
      // }, 0);
      // totalAmount += subTotal;
      return Brewingkit.find({ _id: productIds });
    })
    .then(result => {
      list = [...list, ...result];
      console.log(list);
      // snacks = result;
      //console.log('snacks', snacks);
      const totalAmount = list.reduce((sum, article) => {
        const quantity = basket.find(item => item.product === article._id.toString()).quantity;
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
    .then(order => {
      res.json({ order });
    })
    .catch(error => next(error));
});

router.get('/list', (req, res, next) => {
  Order.find()
    .then(orders => {
      res.json({ orders });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  const orderId = req.params.id;
  Order.findById(orderId)
    .then(order => {
      res.json({ order });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
