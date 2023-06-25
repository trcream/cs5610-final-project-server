// Implement a movies schema that inserts a movie whenver
// a user reviews a movie. The movie should be inserted only
// if it does not exist in the database. If the movie exists
// then the review should be added to the movie's reviews array.

import mongoose from "mongoose";

const moviesSchema = mongoose.Schema(
  {
    imdbID: String,
    title: String,
    poster: String,
    year: String,
    rated: String,
    runtime: String,
    genre: String,
    director: String,
    writer: String,
    actors: String,
    plot: String,
    language: String,
    metascore: String,
    imdbRating: String,
    reviewedBy: [String],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "reviews" }],
  },
  { collection: "movies" }
);

export default moviesSchema;
