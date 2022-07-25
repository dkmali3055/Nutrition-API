const Meal = require("../../model/meal/meal-schema");
const { createMeal } = require("../../model/meal/meal-model");
module.exports = {
  // create getUsers object for get all user data
  get_meal: async (req, res) => {
      console.log("hello");
      Meal.find()
      .populate("foodItem")
          .then(result => {
              console.log("success")
              res.json(result)
          })
          .catch(error => {
              console.log(error)
              res.status(500).json({ message: error.msg });
          });
     
  },

  create_meal: async (req, res) => {
    try {
      const data = req.body;
      //console.log(data);
      createMeal(data, (err, result) => {
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
  update_meal : async(req,res) => {
    console.log(error.msg);
  }
};
