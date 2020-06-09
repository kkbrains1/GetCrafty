'use strict';

const { Router } = require('express');
const router = new Router();

const Snack = require('./../models/snack');

router.post('/', (req, res, next) => {
  const { name, tagline } = req.body;
  Snack.create({ name, tagline })
    .then((snack) => {
      res.json({ snack });
    })
    .catch((error) => next(error));
});

router.get('/list', (req, res, next) => {
  Snack.find()
    .then((snacks) => {
      res.json({ snacks });
    })
    .catch((error) => next(error));
});

router.get('/:id', (req, res, next) => {
  const snackId = req.params.id;
  Snack.findById(snackId)
    .then((snack) => {
      res.json({ snack });
    })
    .catch((error) => next(error));
});

module.exports = router;
