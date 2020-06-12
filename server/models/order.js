'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    basket: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product'
        },
        quantity: {
          type: Number
        }
      }
    ],
    total: {
      amount: { type: Number },
      currency: {
        type: String
      }
    },
    totalPrice: {
      amount: { type: Number },
      currency: {
        type: String
      }
    },
    address: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    country: { type: String },
    city: { type: String },
    postCode: { type: String },
    contact: { type: String },
    payment: { type: String },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: {
      createdAt: 'dateCreated',
      updatedAt: 'dateUpdated'
    }
  }
);

module.exports = mongoose.model('Order', schema);
