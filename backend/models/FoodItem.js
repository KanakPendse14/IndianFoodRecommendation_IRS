// backend/models/FoodItem.js
const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: String, required: true },
  diet: { type: String, required: true },
  prep_time: { type: Number, required: true },
  cook_time: { type: Number, required: true },
  flavor_profile: { type: String, required: true },
  course: { type: String, required: true },
  state: { type: String, required: true },
  region: { type: String, required: true }
});

module.exports = mongoose.model('FoodItem', foodItemSchema);
