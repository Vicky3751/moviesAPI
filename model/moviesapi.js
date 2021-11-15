const mongoose = require("mongoose");
//a general schema designed for the moviesAPI
const moviesSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  overview: {
    type: String,
  },
  ratings: {
    type: Number,
  },
  imageurl: {
    type: String,
  },
});
//creating a model
const movies = mongoose.model("Movie", moviesSchema);
module.exports = movies;
