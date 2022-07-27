const user = require("../../model/user/user-schema");
const Meal = require("../../model/meal/meal-schema");
const { createUser,updateUser } = require("../../model/user/user-model");
const User = require("../../model/user/user-schema");
module.exports = {
  // create get Users object for get all user data
  get_user: (req, res) => {
    user
      .findOne({ name: "dipak" })
      .populate({
        path: "mealPlan.meals",
        populate: { path: "foodItem" },
      })
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: error.msg });
      });
  },

  create_user: async (req, res) => {
    try {
      const data = req.body;
      createUser(data, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            success: 0,
            message: "Data may be not valid or connectivity error",
          });
        } else {
          return res.status(200).json({
            success: 1,
            data: result,
          });
        }
      });
    } catch (error) {
      console.log(error.msg);
    }
  },
  update_user: async (req,res) => {
   // const findOneAndUpdate()
   try{
   const body = req.body;
   updateUser(body,(result) => {    
    if (result !== null) {
      return res.status(200).json({
        success: 1,
        data: "Data updation successfully! ",
      });
    } else {
      return res.json({
        success: 0,
        message: "Data/ Record Not found or Invalid",
      });
    }
  })
    }catch(error){
        console.log(error);
    }
  },
};
