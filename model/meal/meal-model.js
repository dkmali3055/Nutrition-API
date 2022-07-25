
const meal = require('./meal-schema')


module.exports = {

 createMeal : async (data,cb) =>{
    //console.log(data)
    try{
        const document = new meal({
            category: data.category,
            name: data.name,
            foodItem:data.fooditem
        })

        const result = await document.save();
        //console.log(result);
        return cb(null,result)
      
    }
    catch(err){
        console.log(err);
        return cb(err)
    }
}

}

