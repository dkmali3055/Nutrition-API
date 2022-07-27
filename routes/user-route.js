const express = require('express')
const route = express.Router();

//Screate route for users and get his data
const {get_user,create_user,update_user} = require('../controller/user/user-cont');

route.get('/', get_user );

route.post('/create', create_user)

route.patch('/update', update_user)

module.exports = route;