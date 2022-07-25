const user = require('../../model/user/user-schema')
const Meal = require("../../model/meal/meal-schema");
 const {createUser} = require('../../model/user/user-model')
module.exports = {
    // create get Users object for get all user data
    get_user :async (req,res) =>
    {
            //const result = await user.find() ;
            user.find().populate("mealPlan.meals")
                .then(result => {                  
                   res.json(result)
                })
                .catch(error => {
                    console.log(error)
                    res.status(500).json({ message: error.msg });
                });
       
    },

    create_user :async (req,res) =>
    {
        try {
            const data = req.body;
            createUser(data, (err, result) => {
                if (err) {
                  console.log(err);
                  res.status(500).json({
                    success: 0,
                    message: "Data may be not valid or connectivity error",
                  });
                }else{
                return res.status(200).json({
                    success : 1,
                    data : result
                })
              }
              })
        } catch (error) {
            console.log(error.msg)
        }
    },
    update_user : async() => {
        console.log(error.msg)
    }
}