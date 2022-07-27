
const foodItem = require('./item-schema')


module.exports = {
// create function for create item.
 createItem : async (data,cb) =>{
    try{
        const document = new foodItem({
            name:data.name,
            calories : data.calories,
            protein : data.protein,
            carb: data.carb,
            fat: data.fat,
            acceptedUnits:data.acceptedUnits,
            itemWeight: data.itemWeight
        })
        const result = await document.save();
        return cb(null,result)// return result data to update item function in item-controller file
      
    }
    catch(err){
        console.log(err);
        return cb(err)
    }
},
updateItem: async (data, cb) => { 
    //create function for update user
    try {
      const filter = { name: data.name };
      const update = data;
      const result = await foodItem.findOneAndUpdate(filter, update);
      //console.log(result)
      return cb(result); // return result data to update user function in user-controller file
    } catch (err) {
      console.log(err);
      return cb(err);
    }
  }

}

