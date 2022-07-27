const User = require("./user-schema");

module.exports = {
  createUser: async (data, cb) => {
    //console.log(data.mealPlan);
    try {
      const document = new User({
        name: data.name,
        calorieRequirement: data.calorieRequirement,
        mealPlan: data.mealPlan,
      });
      const result = await document.save();
      //console.log(result);
      return cb(null, result);
    } catch (err) {
      console.log(err);
      return cb(err);
    }
  },
  updateUser: async (data, cb) => {
    try {
      const filter = { name: data.name };
      const update = data;
      const result = await User.findOneAndUpdate(filter, update);
      //console.log(result)
      return cb(result);
    } catch (err) {
      console.log(err);
      return cb(err);
    }
  },
};
