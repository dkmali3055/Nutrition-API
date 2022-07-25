const mongoose = require("mongoose"); //import mongoose dependencies

require('../db-conn')

  //create schema for food schema  
const foodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  calories: Number,
  protein: Number,
  carb: Number,
  fat: Number,
  acceptedUnits: {
    type: String,
    enum: ["ml", "liter", "kg", "gm", "item","Boul"],
  },
  itemWeight: Number,
});

const FoodItem = new mongoose.model("FoodItem", foodItemSchema);

module.exports = FoodItem;
