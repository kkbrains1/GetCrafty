'use strict';

const { Router } = require('express');
const router = new Router();

const Product = require('./../models/product');

router.post('/', (req, res, next) => {
  console.log(req.body);
  const { name, tagline } = req.body;
  Product.create({ name, tagline })
    .then((brewingkit) => {
      res.json({ brewingkit });
    })
    .catch((error) => next(error));
});

router.get('/list', (req, res, next) => {
  console.log(req.body);
  Product.find({ type: 'brewingkit' })
    .then((brewingkits) => {
      res.json({ brewingkits });
    })
    .catch((error) => next(error));
});

router.get('/:id', (req, res, next) => {
  const brewingkitId = req.params.id;
  Product.findById(brewingkitId)
    .then((brewingkit) => {
      res.json({ brewingkit });
    })
    .catch((error) => next(error));
});

module.exports = router;
