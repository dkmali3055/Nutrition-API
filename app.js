
// import require  dependencies
const express = require('express'); // import express framwork module
 // import mongoose module
require('dotenv').config();
const app = express();

app.use(express.json());


//food itemes endpoint 
const  item_route = require('./routes/item-route')
app.use('/api/items',item_route)

//meal endpoint
const  meal_route = require('./routes/meal-route')
app.use('/api/meal', meal_route)


//user endpoint
const  user_route = require('./routes/user-route')
app.use('/api/user', user_route)

// create server
const port = (process.env.PORT || 3000)
app.listen(port , () => {
    console.log(`server listening on port ${port}`)
});