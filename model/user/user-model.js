const User = require("./user-schema");

module.exports = {
  createUser: async (data, cb) => {
                                       //create function for create user data 
    try {
      const document = new User({
        name: data.name,
        calorieRequirement: data.calorieRequirement,
        mealPlan: data.mealPlan,
      });
      const result = await document.save();
      //console.log(result);
      return cb(null, result);// return result data to create user function in user-controller file
    } catch (err) {
      console.log(err);
      return cb(err);
    }
  },
  updateUser: async (data, cb) => { 
    //create function for update user
    try {
      const filter = { name: data.name };
      const update = data;
      const result = await User.findOneAndUpdate(filter, update);
      //console.log(result)
      return cb(result); // return result data to update user function in user-controller file
    } catch (err) {
      console.log(err);
      return cb(err);
    }
  },
};
