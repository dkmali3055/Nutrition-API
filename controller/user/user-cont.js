const user = require("../../model/user/user-schema");
const { createUser,updateUser } = require("../../model/user/user-model");

module.exports = {
  // create get Users object for get all user data
  get_user: (req, res) => {
    user
      .find()
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

  //function for get user data from client-side and save in db 
  create_user: async (req, res) => {
    try {
      const data = req.body;

      //call createUser function from user-model file
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
  //create update user function for get data and save in DB
  update_user: async (req,res) => {
   try{
   const body = req.body;
// call updateuser function from user model file for save data
   updateUser(body,(result) => {    
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
  })
    }catch(error){
        console.log(error);
    }
  },
};
