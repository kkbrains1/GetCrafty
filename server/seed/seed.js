'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;

const Products = require('../models/product');

const PRODUCT_DATA = require('./food.json');

const run = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    const products = await Products.create(PRODUCT_DATA);
  } catch (error) {
    console.log(error);
  }
};

run();
