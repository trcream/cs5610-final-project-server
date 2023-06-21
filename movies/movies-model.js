import mongoose from "mongoose";
import moviesSchema from "./movies-schema";
const moviesModel = mongoose.model("movies", moviesSchema);
export default moviesModel;
