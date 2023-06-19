import mongoose from "mongoose";
// Create a schema for users atlas collection
const usersSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    userType: {
      type: String,
      enum: ["admin", "user", "critic"],
      default: "user",
    },
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "reviews" }],
  },
  { collection: "users" }
);
export default usersSchema;
