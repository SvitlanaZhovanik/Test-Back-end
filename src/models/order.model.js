const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 1,
      maxlength: 50,
      required: [true, 'Name user is required'],
    },
    email: {
      type: String,
      required: [true, 'Email user is required'],
    },
    phone: {
      type: String,
      required: [true, 'Phone user is required'],
    },
    address: {
      type: String,
      required: [true, 'Address user is required'],
    },
    totalPrice: { type: Number, required: [true, 'Total price is required'] },
    products: [
      {
        id: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
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
        price: {
          type: String,
          required: [true, 'Price product is required'],
        },
        image: {
          type: String,
        },
        amount: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true },
);
const populateProduct = function (...fields) {
  return function () {
    this.populate('products', fields);
  };
};
orderSchema.pre(
  ['find', 'findOne', 'findOneAndUpdate'],
  populateProduct('name', 'image', 'price', 'description'),
);
orderSchema.post('save', function (doc, next) {
  doc
    .populate('products', ['name', 'image', 'price', 'description'])
    .then(function () {
      next();
    });
});

exports.Order = mongoose.model('Order', orderSchema, 'orders');
