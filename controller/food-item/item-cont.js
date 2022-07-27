const foodItem = require("../../model/food-item/item-schema");
const { createItem,updateItem } = require("../../model/food-item/item-model");
module.exports = {
  // create fooditems object for get all fooditems data
  get_item: async (req, res) => {
    try {
      const result = await foodItem.find();
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.msg });
    }
  },
  //create_item function for save and update fooditems data
  create_item: async (req, res) => {
    try {
      const data = req.body;
      //crateitem function call from cream-model
      createItem(data, (err, result) => {
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
  update_item: async (req, res) => {

      try {
        const body = req.body;
        // call updateuser function from user model file for save data
        updateItem(body, (result) => {
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
    
  },
};
