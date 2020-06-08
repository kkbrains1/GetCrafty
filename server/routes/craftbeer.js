'use strict';

const { Router } = require('express');
const router = new Router();

const Craftbeer = require('./../models/craftbeer');

router.post('/', (req, res, next) => {
  //console.log(req.body);
  const {
    name,
    tagline,
    first_brewed,
    description,
    image_url,
    abv,
    ibu,
    food_pairing,
    ingredients,
    method,
    contributed_by,
    price
  } = req.body;
  Craftbeer.create({
    name,
    tagline,
    first_brewed,
    description,
    image_url,
    abv,
    ibu,
    food_pairing,
    ingredients,
    method,
    contributed_by,
    price
  })
    .then(craftbeer => {
      res.json({ craftbeer });
    })
    .catch(error => next(error));
});

router.get('/list', (req, res, next) => {
  //console.log(req.body);
  Craftbeer.find()
    .then(craftbeers => {
      res.json({ craftbeers });
    })
    .catch(error => next(error));
});

router.get('/:id', (req, res, next) => {
  const craftbeerId = req.params.id;
  //console.log(req.params);
  Craftbeer.findById(craftbeerId)
    .then(craftbeer => {
      res.json({ craftbeer });
    })
    .catch(error => next(error));
});

module.exports = router;
