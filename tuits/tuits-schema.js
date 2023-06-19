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
    userId: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }], // Reference to User schema
  },
  { collection: "reviews" }
);
export default schema;
