const Meal = require("../../model/meal/meal-schema");
const { createMeal,updateMeal } = require("../../model/meal/meal-model");
module.exports = {
  // create get_meal object for get all meal data
  get_meal: async (req, res) => {
    console.log("hello");
    Meal.find()
      .populate("foodItem")
      .then((result) => {
        console.log("success");
        res.json(result);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: error.msg });
      });
  },
  //create meal function for fetch data and save in DB
  create_meal: async (req, res) => {
    try {
      const data = req.body;
      //call create meal function for create a meal data from meal model
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
  update_meal: async (req, res) => {

      try {
        const body = req.body;
        // call updateuser function from user model file for save data
        updateMeal(body, (result) => {
          if (result !== null) {
            return res.status(200).json({
              success: 1,
              data: "Data updation successfully! ",
              result:result
            });
          } else {
            return res.json({
              success: 0,
              message: "Data/ Record Not found or Invalid",
            });
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

