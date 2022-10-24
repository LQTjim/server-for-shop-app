/*
 **id ,**title, **price, **description,**category ,**image ,rating:{rate ,count}
 ** = required
 */
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  id: {
    type: Number,
    min: 0,
    required: [true, "ID is required."],
    index: true,
    unique: true,
  },
  title: {
    type: String,
    maxLength: 100,
    required: [true, "Type is required."],
  },

  price: { type: Number, required: [true, "Price is required."], min: 1 },
  description: {
    type: String,
    maxLength: 300,
    required: [true, "Description is required."],
  },
  category: {
    type: String,
    required: [true, "Category is required."],
    maxLength: 100,
  },
  image: {
    type: String,
    required: [true, "Image URL is required."],
    maxLength: 200,
  },
  rating: {
    rate: { type: Number, min: 0, max: 5, default: 3 },
    count: { type: Number, min: 0, default: 0 },
  },
});
const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
