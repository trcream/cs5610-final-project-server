import { json } from "express";

import * as moviesDao from "../movies/movies-dao.js";

const createMovie = async (req, res) => {
  // console.log("Creating Movie Object");
  // //   console.log("User ID:", req.body.userId);
  // console.log("User Imdb:", req.body.imdbID);
  // // console.log("current ")
  // console.log("reviewed by " + req.body.reviewedBy);

  console.log("create Movie req.body is: " + JSON.stringify(req.body));

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
    newMovie.reviewedBy = req.body.reviewedBy || [];
    newMovie.reviews = [];

    // newMovie.reviewedBy.push(req.body.reviewedBy);
    console.log("reviewed by username: " + req.body.reviewedBy);

    const insertedMovie = await moviesDao.createMovie(newMovie);
    res.json(insertedMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create movie object" });
  }
};

const updateMovieByImdbId = async (req, res) => {
  console.log("Updating Movie Object");
  const imdbId = req.params.imdbId;
  const updatedMovie = req.body;

  try {
    const existingMovie = await moviesDao.findMovieByImdbId(imdbId);

    if (!existingMovie) {
      res.status(404).json({ error: "Movie not found" });
      return;
    }

    // Check if the `reviewedBy` field exists in the request body
    if (Array.isArray(req.body.reviewedBy)) {
      updatedMovie.reviewedBy = [
        ...existingMovie.reviewedBy,
        ...req.body.reviewedBy,
      ]; // Add the new reviewedBy users to the existing array
    } else if (typeof req.body.reviewedBy === "string") {
      updatedMovie.reviewedBy = [
        ...existingMovie.reviewedBy,
        req.body.reviewedBy,
      ]; // Add the new reviewedBy user to the existing array
    } else {
      updatedMovie.reviewedBy = existingMovie.reviewedBy; // Keep the existing array if reviewedBy is not provided or is invalid
    }

    const status = await moviesDao.updateMovieByImdbId(imdbId, updatedMovie);
    res.json(status);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update movie" });
  }
};

const findMovieByImdbId = async (req, res) => {
  console.log("Finding Movie Object");
  const imdbId = req.params.imdbId;
  const movie = await moviesDao.findMovieByImdbId(imdbId);
  res.json(movie);
};

export default (app) => {
  app.post("/api/movies", createMovie);
  app.get("/api/movies/imdbId/:imdbId", findMovieByImdbId);
  app.put("/api/movies/imdbId/:imdbId", updateMovieByImdbId);
  // app.delete("/api/movies/:tid", deleteTuit);
};
