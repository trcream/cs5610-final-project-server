import mongoose from "mongoose";
import adminSchema from "./admin-schema.js";
const adminModel = mongoose.model("admin", adminSchema);
export default adminModel;
