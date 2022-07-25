const mongoose = require("mongoose"); //import mongoose dependencies

require('../db-conn')
const mealSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ["Breakfast", "Lunch", "Evening Snack", "Dinner"],
  },
  name: String,
  foodItem:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"FoodItem"
  }]

 
});

const Meal = new mongoose.model("Meal", mealSchema);

module.exports = Meal;
