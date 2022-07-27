
const foodItem = require("../../model/food-item/item-schema");
module.exports = {
  get_calorie: async (req, res) => {
    try {
      let calorie =req.body.calorie;
      const result = await foodItem.find();
      let items = new Array();
      const protein = (calorie *25)/100
      let sum = {
        calorie: 0,
        protein: 0,
      };
      for (let index = 0; index < result.length; index++) {
        let element = result[Math.floor(Math.random() * result.length)];
        if (sum.calorie < calorie && sum.protein<protein) {
          let len = 2;          
          if (len >= 2 && items.length < 5) {
            items.push({
              name: element.name,
              calories: element.calories,
              protein: element.protein,
              unit:
                element.acceptedUnits !== "item"
                  ? `100 ${element.acceptedUnits}`
                  : "1 item",
            });
            sum.cal += element.calories;
            sum.pro += element.protein;
          }
        }
      }
      
      if (items.length >= 2) res.json(items);
      else {
        res.json("input value is very short");
      }
    } catch (error) {
      res.status(500).json({ message: error.msg });
    }
  },
};
