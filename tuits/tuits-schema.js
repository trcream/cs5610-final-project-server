import mongoose from "mongoose";
// collection is equivalent to table in SQL
const schema = mongoose.Schema(
  {
    tuit: String,
    likes: Number,
    dislikes: Number,
    liked: Boolean,
    username: String,
    handle: String,
    time: String,
    image: String,
    topic: String,
    title: String,
    poster: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    // Whenever a user reviews a movie the imdbId will be store here
    imdbID: { type: String },
  },
  { collection: "reviews" }
);
export default schema;
