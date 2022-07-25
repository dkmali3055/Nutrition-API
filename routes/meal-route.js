const express = require('express')
const route = express.Router();

const {get_meal,create_meal,update_meal} = require('../controller/meal/meal-cont');

route.get('/', get_meal );

route.post('/create', create_meal)

route.patch('/update',update_meal)


module.exports = route;