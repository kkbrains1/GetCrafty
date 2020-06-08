'use strict';

const { Router } = require('express');
const router = new Router();

const BrewingKit = require('./../models/brewingkit');

router.post('/', (req, res, next) => {
  console.log(req.body);
  const { name, tagline } = req.body;
  BrewingKit.create({ name, tagline })
    .then((brewingkit) => {
      res.json({ brewingkit });
    })
    .catch((error) => next(error));
});

router.get('/list', (req, res, next) => {
  console.log(req.body);
  BrewingKit.find()
    .then((brewingkits) => {
      res.json({ brewingkits });
    })
    .catch((error) => next(error));
});

router.get('/:id', (req, res, next) => {
  const brewingkitId = req.params.id;
  BrewingKit.findById(brewingkitId)
    .then((brewingkit) => {
      res.json({ brewingkit });
    })
    .catch((error) => next(error));
});

module.exports = router;
