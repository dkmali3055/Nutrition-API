const mongoose = require("mongoose"); //import mongoose dependencies


// create shema
require('../db-conn')
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim:true
  },
  calorieRequirement: Number,
  mealPlan:[{
    date : {
      type: String
    } ,
    meals: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Meal"
    }
}],
});

const User = new mongoose.model("User", userSchema); // create model for schema

module.exports = User;
