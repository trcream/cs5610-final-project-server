import * as adminDao from "./admin-dao.js";

const AdminController = (app) => {
  app.get("/api/admin", findAllAdmins);
  app.get("/api/admin/:id", findAdminById);
  app.post("/api/admin", createAdmin);
  app.put("/api/admin/:id", updateAdmin);
  app.delete("/api/admin/:id", deleteAdmin);
};

const findAllAdmins = async (req, res) => {
  const admins = await adminDao.findAllAdmins();
  res.json(admins);
};

const findAdminById = async (req, res) => {
  const id = req.params.id;
  const admin = await adminDao.findAdminById(id);
  res.json(admin);
};

const createAdmin = async (req, res) => {
  console.log("Admin-controller: Creating user");

  const newAdmin = await adminDao.createAdmin(req.body);
  res.json(newAdmin);
};

const updateAdmin = async (req, res) => {
  const id = req.params.id;
  const status = await adminDao.updateAdmin(id, req.body);
  res.json(status);
};

const deleteAdmin = async (req, res) => {
  const id = req.params.id;
  const status = await adminDao.deleteAdmin(id);
  res.json(status);
};

export default AdminController;
