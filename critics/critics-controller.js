import * as criticsDao from "./critics-dao.js";

const CriticsController = (app) => {
  app.get("/api/critic", findAllCritics);
  app.get("/api/critic/:id", findCriticById);
  app.get("/api/critic/username/:username", findCriticByUsername);
  app.post("/api/critic", createCritic);
  app.put("/api/critic/:id", updateCritic);
  app.delete("/api/critic/:id", deleteCritic);
  app.delete("/api/critic/username/:username", deleteCriticByUsername);
};

const findCriticByUsername = async (req, res) => {
  console.log("Critic-controller: Finding critic by username");
  console.log("req.params.username is: " + req.params.username);
  const username = req.params.username;
  const critic = await criticsDao.findCriticByUsername(username);
  res.json(critic);
};

const findAllCritics = async (req, res) => {
  const critics = await criticsDao.findAllCritics();
  res.json(critics);
};

const findCriticById = async (req, res) => {
  const id = req.params.id;
  const critic = await criticsDao.findCriticById(id);
  res.json(critic);
};

const createCritic = async (req, res) => {
  console.log("Critic-controller: Creating critic");
  const newCritic = await criticsDao.createCritic(req.body);
  res.json(newCritic);
};

const updateCritic = async (req, res) => {
  console.log("Critic-controller: Updating critic");
  const id = req.params.id;
  console.log("id is: " + id);
  const status = await criticsDao.updateCritic(id, req.body);
  res.json(status);
};

const deleteCritic = async (req, res) => {
  const id = req.params.id;
  const status = await criticsDao.deleteCritic(id);
  res.json(status);
};

const deleteCriticByUsername = async (req, res) => {
  const username = req.params.username;
  const status = await criticsDao.deleteCriticByUsername(username);
  res.json(status);
};

export default CriticsController;
