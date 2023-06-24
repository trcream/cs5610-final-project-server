import adminModel from "./admin-model.js";

export const findAllAdmins = () => adminModel.find();
export const findAdminById = (id) => adminModel.findById(id);
export const findAdminByUsername = (username) =>
  adminModel.findOne({ username });
export const findAdminByCredentials = (username, password) =>
  adminModel.findOne({ username, password });
export const createAdmin = (admin) => adminModel.create(admin);
export const updateAdmin = (id, admin) =>
  adminModel.updateOne({ _id: id }, { $set: admin });
export const deleteAdmin = (id) => adminModel.deleteOne({ _id: id });
