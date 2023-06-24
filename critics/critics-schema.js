import mongoose from "mongoose";

const criticsSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    profilePic: String,
    ratingHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "reviews" }],
    bio: String,
    userType: {
      type: String,
      default: "critic",
      enum: ["critic"],
    },
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "reviews" }],
    imdbID: { type: String },
  },
  { collection: "critics" }
);

export default criticsSchema;
