import mongoose from "mongoose";
import tuitsSchema from "./tuits-schema.js";
const tuitsModel = mongoose.model("reviews", tuitsSchema);
export default tuitsModel;

// import mongoose from "mongoose";
// import tuitsSchema from "./tuits-schema.js";
// const tuitsModel = mongoose.model("reviews", tuitsSchema);
// export default tuitsModel;
