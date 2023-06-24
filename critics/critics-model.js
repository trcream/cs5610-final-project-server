import mongoose from "mongoose";
import criticsSchema from "./critics-schema.js";
const criticsModel = mongoose.model("critics", criticsSchema);
export default criticsModel;
