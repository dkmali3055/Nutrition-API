const mongoose = require("mongoose"); //import mongoose dependencies

//const DB = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qbbas.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// connect database by mongoose
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

const User = new mongoose.model("User", userSchema);

module.exports = User;
