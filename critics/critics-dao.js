import criticsModel from "./critics-model.js";

export const findAllCritics = () => criticsModel.find();
export const findCriticById = (id) => criticsModel.findById(id);
export const findCriticByUsername = (username) =>
  criticsModel.findOne({ username });
export const findCriticByCredentials = (username, password) =>
  criticsModel.findOne({ username, password });
export const createCritic = (critic) => criticsModel.create(critic);
export const updateCritic = (id, critic) =>
  criticsModel.updateOne({ _id: id }, { $set: critic });
export const deleteCritic = (id) => criticsModel.deleteOne({ _id: id });
export const deleteCriticByUsername = (username) =>
  criticsModel.deleteOne({ username });

export const followCritic = (uid, otherCriticId) =>
  criticsModel.updateOne({ _id: uid }, { $push: { following: otherCriticId } });

export const unfollowCritic = (uid, otherCriticId) =>
  criticsModel.updateOne({ _id: uid }, { $pull: { following: otherCriticId } });
