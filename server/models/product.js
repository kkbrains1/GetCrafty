'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: { type: String },
    tagline: { type: String },
    type: {type: String},
    photo: { type: String },
    first_brewed: { type: String },
    description: { type: String },
    abv: { type: Number },
    ibu: { type: Number },
    target_fg: { type: Number },
    target_og: { type: Number },
    ebc: { type: Number },
    srm: { type: Number },
    ph: { type: Number },
    attenuation_level: { type: Number },
    volume: {
      value: { type: Number },
      unit: { type: String }
    },
    boil_volume: {
      value: { type: Number },
      unit: { type: String }
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: { type: Number },
            unit: { type: String }
          },
          duration: { type: Number }
        }
      ],
      fermentation: {
        temp: {
          value: { type: Number },
          unit: { type: String }
        }
      },
      twist: { type: String }
    },
    ingredients: {
      malt: [
        {
          name: { type: String },
          amount: {
            value: { type: Number },
            unit: { type: String }
          }
        }
      ],
      hops: [
        {
          name: { type: String },
          amount: {
            value: { type: Number },
            unit: { type: String }
          },
          add: { type: String },
          attribute: { type: String }
        }
      ],
      yeast: { type: String }
    },
    food_pairing: [{ type: String }],
    brewers_tips: { type: String },
    contributed_by: { type: String },
    price: {
      amount: { type: Number },
      currency: {
        type: String
      }
    }
  },
  {
    timestamps: {
      createdAt: 'dateCreated',
      updatedAt: 'dateUpdated'
    }
  }
);

module.exports = mongoose.model('Product', schema);
