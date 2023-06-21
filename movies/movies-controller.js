import { json } from "express";

import * as moviesDao from "../movies/movies-dao.js";

const createMovie = async (req, res) => {
  console.log("Creating Movie Object");
  //   console.log("User ID:", req.body.userId);
  console.log("User Imdb:", req.body.imdbID);
  // console.log("current ")

  try {
    // Add error handling here to fix bug

    const newMovie = req.body;
    newMovie.imdbID = req.body.imdbID || "";
    newMovie.title = req.body.title || "";
    newMovie.poster = req.body.poster || "";
    newMovie.year = req.body.year || "";
    newMovie.rated = req.body.rated || "";
    newMovie.runtime = req.body.runtime || "";
    newMovie.genre = req.body.genre || "";
    newMovie.director = req.body.director || "";
    newMovie.writer = req.body.writer || "";
    newMovie.actors = req.body.actors || "";
    newMovie.plot = req.body.plot || "";
    newMovie.language = req.body.language || "";
    newMovie.metascore = req.body.metascore || "";
    newMovie.imdbRating = req.body.imdbRating || "";
    newMovie.reviewedBy = [];
    newMovie.reviews = [];

    newMovie.reviewedBy.push(req.body._id);

    const insertedMovie = await moviesDao.createMovie(newMovie);
    res.json(insertedMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create movie object" });
  }
};

export default (app) => {
  app.post("/api/movies", createMovie);
  // app.get("/api/movies", findTuits);
  // app.put("/api/movies/:tid", updateTuit);
  // app.delete("/api/movies/:tid", deleteTuit);
};
