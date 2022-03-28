const mongoose = require('mongoose');

let DogModel = {};

// Name, # of beds, createdDate
const DogSchema = new mongoose.Schema(
  {
    name:
    {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    breed:
    {
      type: String,
      required: true,
    },
    age:
    {
      type: Number,
      min: 0,
      required: true,

    },
    createdDate:
    {
      type: Date,
      default: Date.now,

    },
  },
);

DogModel = mongoose.model('Dog', DogSchema);

module.exports = DogModel;
