import mongoose from "mongoose";

const actorsSchema = new mongoose.Schema(
  {
    name: String,
    bio: String,
    imdbIds: [String],
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "movies" }],
  },
  { collection: "actors" }
);

export default actorsSchema;
