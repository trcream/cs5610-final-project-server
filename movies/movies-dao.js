import mongoose from "mongoose";
import moviesSchema from "./movies-schema.js";

const moviesModel = mongoose.model("movies", moviesSchema);

export const findMovies = () => moviesModel.find();

export const createMovie = (movie) => moviesModel.create(movie);

export const deleteMovie = (movieId) => moviesModel.deleteOne({ _id: movieId });

export const updateMovie = (movieId, movie) =>
  Movies.updateOne({ _id: movieId }, { $set: movie });
