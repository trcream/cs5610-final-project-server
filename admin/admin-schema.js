import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    userType: {
      type: String,
      default: "admin",
      enum: ["admin"],
    },
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "reviews" }],
    removedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    reportedReviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "reviews" }],
    imdbID: { type: String },
  },
  { collection: "admin" }
);

export default adminSchema;
