const mongoose = require('mongoose');
​
const schema = new mongoose.Schema(
  {
    basket: [
      {
        brewingkit: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'BrewingKit'
        },
        quantity: {
          type: Number
        }
      },
      {
        snack: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Snack'
        },
        quantity: {
          type: Number
        }
      },
      {
        craftbeer: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Craftbeer'
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
    adress: { type: String },
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
​
const Model = mongoose.model('Order', schema);
​
module.exports = Model;
Recolher





