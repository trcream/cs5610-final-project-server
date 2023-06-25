import mongoose from "mongoose";
import moviesSchema from "./movies-schema.js";

const moviesModel = mongoose.model("movies", moviesSchema);

export const findMovies = () => moviesModel.find();

export const createMovie = (movie) => moviesModel.create(movie);

export const deleteMovie = (movieId) => moviesModel.deleteOne({ _id: movieId });

// Search by imdbID
export const findMovieByImdbId = (imdbId) =>
  moviesModel.findOne({ imdbID: imdbId });

export const updateMovieByImdbId = (imdbId, movie) =>
  moviesModel.updateOne({ imdbID: imdbId }, { $set: movie });
