const mongoose = require("mongoose"); //import mongoose dependencies

const DB = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qbbas.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// connect database by mongoose
module.exports = 
mongoose.connect(DB)
  .then((res) => {
    console.log(" database connected");
  })
  .catch((err) => {
    console.log("not connected \n", err);
  });
