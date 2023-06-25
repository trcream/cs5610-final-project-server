import mongoose from "mongoose";
import actorsSchema from "./actors-schema.js";
const actorsModel = mongoose.model("actors", actorsSchema);
export default actorsModel;
