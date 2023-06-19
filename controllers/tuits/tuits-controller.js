// import posts from "./tuits.js";
// let tuits = posts;

// Gives us access to all the methods in tuits dao
import * as tuitsDao from "../../tuits/tuits-dao.js";

const createTuit = async (req, res) => {
  try {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 0;

    // Ensure the username and handle are provided
    newTuit.username = newTuit.username || "";
    newTuit.handle = newTuit.handle || "";

    // Set default values if not provided
    newTuit.time = newTuit.time || "";
    newTuit.image = newTuit.image || "";
    newTuit.topic = newTuit.topic || "";

    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create tuit" });
  }
};

// const createTuit = async (req, res) => {
//   const newTuit = req.body;
//   newTuit.likes = 0;
//   newTuit.liked = false;
//   newTuit.username = "Nasa";
//   newTuit.handle = "@nasa";
//   newTuit.time = "2h";
//   newTuit.image = "nasa.png";
//   newTuit.topic = "Space";
//   newTuit.dislikes = 0;
//   const insertedTuit = await tuitsDao.createTuit(newTuit);
//   res.json(insertedTuit);
// };

const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  res.json(tuits);
};

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
  res.json(status);
};

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.json(status);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
