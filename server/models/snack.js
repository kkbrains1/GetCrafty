const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: { type: String },
    tagline: { type: String },
    photo: { type: String },
    price: {
      amount: { type: Number },
      currency: {
        type: String
      }
    },
    description: { type: String }
  },
  {
    timestamps: {
      createdAt: 'dateCreated',
      updatedAt: 'dateUpdated'
    }
  }
);

const Model = mongoose.model('Snack', schema);

module.exports = Model;
