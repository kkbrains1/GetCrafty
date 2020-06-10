const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    basket: [
      // {
      //   brewingkit: {
      //     type: mongoose.Schema.Types.ObjectId,
      //     ref: 'BrewingKit'
      //   },
      //   quantity: {
      //     type: Number
      //   }
      // },
      // {
      //   snack: {
      //     type: mongoose.Schema.Types.ObjectId,
      //     ref: 'Snack'
      //   },
      //   quantity: {
      //     type: Number
      //   }
      // },
      // {
      //   craftbeer: {
      //     type: mongoose.Schema.Types.ObjectId,
      //     ref: 'Craftbeer'
      //   },
      //   quantity: {
      //     type: Number
      //   }
      // }
      {
<<<<<<< HEAD
        product: {
          type: String
=======
        brewingkit: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'BrewingKit'
>>>>>>> b34e81824a91a60e66c4ec69fbb284a5edbd908c
        },
        quantity: {
          type: Number
        },
<<<<<<< HEAD
        details: {
          type: Object
=======
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
>>>>>>> b34e81824a91a60e66c4ec69fbb284a5edbd908c
        }
      }
    ],
    total: {
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

const Model = mongoose.model('Order', schema);

module.exports = Model;
