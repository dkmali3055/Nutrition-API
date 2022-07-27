
const meal = require('./meal-schema')


module.exports = {

 createMeal : async (data,cb) =>{
    //create function for create meal data and save in data base
    try{
        const document = new meal({
            category: data.category,
            name: data.name,
            foodItem:data.fooditem
        })

        const result = await document.save();
        //console.log(result);
        return cb(null,result) // return result data to create-meal function in meal controller file.
      
    }
    catch(err){
        console.log(err);
        return cb(err)
    }
},
updateMeal: async (data, cb) => { 
    //create function for update user
    try {
      const filter = { id: data.id };
      const update = data;
      const result = await meal.findOneAndUpdate(filter, update);
      //console.log(result)
      return cb(result); // return result data to update user function in user-controller file
    } catch (err) {
      console.log(err);
      return cb(err);
    }
  }

}

