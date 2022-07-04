const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 1,
      maxlength: 50,
      required: [true, 'Name product is required'],
    },
    description: {
      type: String,
      required: [true, 'Description product is required'],
    },
    country: {
      type: String,
    },
    ingredients: {
      type: String,
      required: [true, 'Ingredients product is required'],
    },
    isVegan: {
      type: Boolean,
    },
    calorieCount: {
      type: Number,
      min: 1,
      required: [true],
    },
    image: {
      type: String,
    },
    price: {
      type: String,
      required: [true, 'Ingredients product is required'],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'Shop',
    },
  },
  { timestamps: true },
);

const populateOwner = function (...fieds) {
  return function () {
    this.populate('owner', fieds);
  };
};

productSchema.pre(
  ['find', 'findOne', 'findOneAndUpdate'],
  populateOwner('email'),
);

exports.Product = mongoose.model('Product', productSchema, 'products');
