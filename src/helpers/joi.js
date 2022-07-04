const { isValidObjectId } = require('mongoose');

exports.checkObjectId = (value, helpers) => {
  if (!isValidObjectId(value)) {
    return helpers.message('Product not found. Invalid ID');
  }
  return value;
};
