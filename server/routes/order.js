'use strict';

const { Router } = require('express');
const router = new Router();

const Craftbeer = require('./../models/craftbeer');
const Snack = require('./../models/snack');
const Brewingkit = require('./../models/brewingkit');
const Order = require('./../models/order');

router.post('/', (req, res, next) => {
  const { basket } = req.body;
  console.log(basket);
  //let customer;
  /*   let craftbeers;
  let snacks;
  let brewingkits; */
  // let totalAmount = 0;
  const productIds = [...basket].map(item => item._id);
  // const craftbeerIds = [...basket].filter(item => item.type === 'craftbeer').map(item => item._id);
  // const snackIds = [...basket].filter(item => item.type === 'snack').map(item => item._id);
  // const brewingkitIds = [...basket].filter(item => item.type === 'brewingkit').map(item => item._id);
  // console.log('craftbeers', craftbeerIds, 'snacks', snackIds, 'brewingkit', brewingkitIds);
  //console.log(basket);
  let list = [];
  Craftbeer.find({ _id: productIds })
    .then(result => {
      list = [...list, ...result];
      //console.log(productIds);
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
      //console.log(basket);
      // snacks = result;
      //console.log('snacks', snacks);
      const totalAmount = list.reduce((sum, article) => {
        const quantity = basket.find(item => item._id === article._id.toString()).quantity;
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
  let allProductIds;
  let allProducts = [];
  let allOrders;
  Order.find()
    .then(orders => {
      allOrders = orders;
      let baskets = allOrders.map(item => item.basket);
      allProductIds = (baskets.flat()
        .map(item => item._id.toString())
        .filter((x, i, a) => a.indexOf(x) == i));
      return Craftbeer.find({ _id: allProductIds });
    })
    .then(result => {
      allProducts = [...allProducts, ...result];
      return Snack.find({ _id: allProductIds });
    })
    .then(result => {
      allProducts = [...allProducts, ...result];
      return Brewingkit.find({ _id: allProductIds });
    })
    .then(result=> {
      allProducts = [...allProducts, ...result];
      res.json({ allOrders, allProducts });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  const orderId = req.params.id;
  let allProductIds;
  let allProducts = [];
  let order;
  Order.findById(orderId)
    .then(result => {
      order = result;
      allProductIds = order.basket.map(item => item._id.toString());
      console.log(allProductIds);
      return Craftbeer.find({ _id: allProductIds });
    })
    .then(result => {
      allProducts = [...allProducts, ...result];
      return Snack.find({ _id: allProductIds });
    })
    .then(result => {
      allProducts = [...allProducts, ...result];
      return Brewingkit.find({ _id: allProductIds });
    })
    .then(result => {
      allProducts = [...allProducts, ...result];
      res.json({ order, allProducts });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
