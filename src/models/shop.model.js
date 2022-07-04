const mongoose = require('mongoose');
const { Schema } = mongoose;

const shopSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 1,
      maxlength: 50,
      required: [true, 'Name shop is required'],
    },
    description: {
      type: String,
      required: [true, 'description shop is required'],
    },
  },
  { timestamps: true },
);

exports.Shop = mongoose.model('Shop', shopSchema, 'shops');
