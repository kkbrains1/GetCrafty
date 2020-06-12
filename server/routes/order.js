'use strict';

const { Router } = require('express');
const router = new Router();

const Product = require('./../models/product');
const Order = require('./../models/order');

// Stripe configuration

const stripe = require('stripe');
const stripeInstance = stripe(process.env.STRIPE_API_SECRET_KEY);

router.post('/', (req, res, next) => {
  //console.log('router body', req.body);
  const { firstName,
    lastName,
    country,
    city,
    postCode,
    contact, address, creditCardToken, shoppingBasket } = req.body;
  //console.log(address, creditCardToken, shoppingBasket);
  const productIds = shoppingBasket.map(item => item.product);
  //console.log(productIds);

  let customer;
  let total;

  Product.find({ _id: productIds })
    .then(products => {
      //console.log(products);
      const totalAmount = products.reduce((sum, product) => {
        const quantity = shoppingBasket.find(item => item.product === product._id.toString()).quantity;
        return sum + product.price.amount * quantity;
      }, 0);
      total = {
        amount: totalAmount,
        currency: products[0].price.currency
      };

      return stripeInstance.customers.create();
    })
    .then(document => {
      customer = document;
      return stripeInstance.paymentMethods.attach(creditCardToken, {
        customer: customer.id
      });
    })
    .then(method => {
      return stripeInstance.paymentIntents.create({
        customer: customer.id,
        payment_method: creditCardToken,
        amount: total.amount,
        currency: total.currency,
        error_on_requires_action: true,
        confirm: true,
        save_payment_method: true
      });
    })
    .then(payment => {
      //console.log(payment);
      if (payment.status !== 'succeeded') {
        return Promise.reject(new Error('Charge could not be made.'));
      } else {
        return Order.create({
          basket: shoppingBasket,
          total: total,
          payment: payment.id,
          address: address,
          firstName,
          lastName,
          country,
          city,
          postCode,
          contact
          // user: req.user._id
        });
      }
    })
    .then(order => {
      res.json({ order: order });
    })
    .catch(error => {
      console.log(error);
    });
});


/* router.post('/', (req, res, next) => {
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
}); */

router.get('/list', (req, res, next) => {
  //const user = req.user._id;
  //console.log('I am ', req.user);
  Order.find({})
    .populate({ path: 'basket.product' })
    .then((orders) => {
      //allProducts = [...allProducts, ...result];
      //console.log(orders.basket);
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
      //console.log(order);
      //      allProducts = [...allProducts, ...result];
      res.json({ order });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
