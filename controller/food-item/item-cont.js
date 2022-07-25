const foodItem = require('../../model/food-item/item-schema')
 const {createItem} = require('../../model/food-item/item-model')
module.exports = {
    // create getUsers object for get all user data
    get_item :async (req,res) =>
    {
        try {
            const result = await foodItem.find() ;
            res.json(result)
        } catch (error) {
           res.status(500).json({message : error.msg}) 
        }
    },

    create_item :async (req,res) =>
    {
        try {
            const data = req.body;
            createItem(data, (err, result) => {
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
    update_item: async (req,res) =>{
        console.log(error.msg)
    }

}