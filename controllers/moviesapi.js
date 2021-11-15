const express = require("express");
const router = express.Router();
//importing the validator middleware
const { checker } = require("../validator/validator.js");
//importing the schema
const Movie = require("../model/moviesapi");

//a get route to get all the movies present in the database -> READ ALL
router.get("/", async (req, res) => {
  try {
    const allmovies = await Movie.find();
    res.send(allmovies);
  } catch (error) {
    res.json({
      message: "Error fetching ",
      error,
    });
  }
});

//a post route to create a movie object with validations applied -> CREATE
router.post("/add", async (req, res) => {
  //validating using joi
  const { error } = checker(req.body);
  if (error) return res.send(error.details[0].message);

  const movie = await new Movie({
    name: req.body.name,
    title: req.body.title,
    overview: req.body.overview,
    ratings: req.body.ratings,
    imageurl: req.body.imageurl,
  });

  try {
    await movie.save();
    res.json({
      message: "Success",
      movie,
    });
  } catch (error) {
    res.json({
      message: "Error adding file",
      error,
    });
  }
});

// a get route to get a single movie -> READ ONE
router.get("/:id", async (req, res) => {
  const movie = await Movie.findOne({ _id: req.params.id });
  if (!movie) return res.send({ message: "No movie found" });
  try {
    res.json({
      movie,
    });
  } catch (error) {
    res.json({
      message: "Error fetching",
      error,
    });
  }
});

// a put route to update a movie  -> UPDATE

router.put("/:id", async (req, res) => {
  const updateMovie = await Movie.findOneAndUpdate(
    { _id: req.params.id },
    req.body
  );
  if (!updateMovie)
    return res.json({
      message: "No movies found to update | Enter a valid ID",
    });
  try {
    res.json({
      message: " Movie Updated",
    });
  } catch (error) {
    res.json({
      message: "Error fetching",
      error,
    });
  }
});

// a delete route to delete a  movie -> DELETE
router.delete("/:id", async (req, res) => {
  const movie = await Movie.findOne({ _id: req.params.id });
  if (!movie) return res.send({ message: "No movie found" });
  const deleteMovie = await Movie.deleteOne({ _id: req.params.id });
  if (!deleteMovie)
    return res.json({
      message: "No movies found to delete | Enter a valid ID",
    });
  try {
    res.json({
      message: " Movie deleted",
    });
  } catch (error) {
    res.json({
      message: "Error fetching ",
      error,
    });
  }
});

module.exports = router;
