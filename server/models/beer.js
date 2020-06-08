const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String },
  photo: { type: String },
  price: {
    amount: { type: Number },
    currency: {
      type: String
    }
  },
  description: { type: String },
  id: { type: String }
});

const Model = mongoose.model('Beer', schema);

module.exports = Model;
