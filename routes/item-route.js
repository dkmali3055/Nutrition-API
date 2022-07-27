const express = require('express')

// import and create express router of intance of epress class
const route = express.Router();

//here import itmes controller fo data execution
const {get_item,create_item,update_item} = require('../controller/food-item/item-cont');
const {get_calorie} = require('../controller/food-item/get-item-log');

route.get('/', get_item ); // Get endpoint for get all item

route.post('/create', create_item); // post request for entering data in database

route.patch('/update', update_item); // patch request to update fooditems
route.post('/meals', get_calorie); //post request fo find meal on the basis of given calorie

module.exports = route;