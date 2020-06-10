'use strict';

const { Router } = require('express');
const router = new Router();

const Product = require('./../models/product');

router.post('/', (req, res, next) => {
  const { name, tagline } = req.body;
  Product.create({ name, tagline })
    .then(snack => {
      res.json({ snack });
    })
    .catch(error => next(error));
});

router.get('/list', (req, res, next) => {
  Product.find({ type: 'snack' })
    .then(snacks => {
      res.json({ snacks });
    })
    .catch(error => next(error));
});

router.get('/:id', (req, res, next) => {
  const snackId = req.params.id;
  Product.findById(snackId)
    .then(snack => {
      res.json({ snack });
    })
    .catch(error => next(error));
});

module.exports = router;
