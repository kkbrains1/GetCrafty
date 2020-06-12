'use strict';

const { Router } = require('express');
const router = new Router();

const Product = require('./../models/product');

router.post('/', (req, res, next) => {
  console.log(req.body);
  const {
    name,
    tagline,
    first_brewed,
    description,
    photo,
    abv,
    ibu,
    food_pairing,
    ingredients,
    method,
    contributed_by,
    price
  } = req.body;
  Product.create({
    name,
    tagline,
    first_brewed,
    description,
    photo,
    abv,
    ibu,
    food_pairing,
    ingredients,
    method,
    contributed_by,
    price
  })
    .then((craftbeer) => {
      res.json({ craftbeer });
    })
    .catch((error) => next(error));
});

router.get('/list', (req, res, next) => {
  //'console.log(req.body)';
  Product.find({ type: 'craftbeer' })
    .then((craftbeers) => {
      res.json({ craftbeers });
    })
    .catch((error) => next(error));
});

router.get('/random', (req, res, next) => {
  Product.find({ type: 'craftbeer' })
    .then((allBeers) => {
      const random_id = Math.floor(Math.random() * allBeers.length);
      const beer = allBeers[random_id];
      //console.log(allBeers, random_id);
      res.json({ beer });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  const craftbeerId = req.params.id;
  //console.log(req.params);
  Product.findById(craftbeerId)
    .then((craftbeer) => {
      res.json({ craftbeer });
    })
    .catch((error) => next(error));
});

module.exports = router;
