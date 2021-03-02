const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ProductSchema = new Schema({
  title : {
    type: String,
    required: true
  },
  description : {
    type: String,
    required: false
  },
  price : {
    type: String,
    required: true
  },
  image : {
    type: String,
    required: false
  },
  discountPrice: {
    type: String,
    required: false
  },
  Weight: {
    type: String,
    required: false
  },
  dimensions: {
    type: String,
    required: false
  },
  quantity: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = User = mongoose.model("products", ProductSchema);