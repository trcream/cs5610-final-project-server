import usersModel from "./users-model.js";

export const findAllUsers = () => usersModel.find();
export const findUserById = (id) => usersModel.findById(id);
export const findUserByUsername = (username) =>
  usersModel.findOne({ username });
export const findUserByCredentials = (username, password) =>
  usersModel.findOne({ username, password });
export const createUser = (user) => usersModel.create(user);
export const updateUser = (id, user) =>
  usersModel.updateOne({ _id: id }, { $set: user });
export const deleteUser = (id) => usersModel.deleteOne({ _id: id });

export const followUser = (uid, otherUserId) =>
  usersModel.updateOne({ _id: uid }, { $push: { following: otherUserId } });

export const unfollowUser = (uid, otherUserId) =>
  usersModel.updateOne({ _id: uid }, { $pull: { following: otherUserId } });
