import mongoose from "mongoose";
import actorsSchema from "./actors-schema.js";

const actorsModel = mongoose.model("actors", actorsSchema);

export const findActors = () => actorsModel.find();

export const createActor = (actor) => actorsModel.create(actor);

export const deleteActor = (actorId) => actorsModel.deleteOne({ _id: actorId });

export const findActorByName = (name) => actorsModel.findOne({ name });

export const updateActorByName = (name, actor) =>
  actorsModel.updateOne({ name }, { $set: actor });
