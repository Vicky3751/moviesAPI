const mongoose = require("mongoose");
//using dotenv for the encapsulation of the passwords and other stuff
require("dotenv").config();
//connecting to mongodb database
const connected = mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));
