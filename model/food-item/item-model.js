
const foodItem = require('./item-schema')


module.exports = {

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
        return cb(null,result)
      
    }
    catch(err){
        console.log(err);
        return cb(err)
    }
}

}

