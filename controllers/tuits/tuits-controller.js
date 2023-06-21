// import posts from "./tuits.js";
// let tuits = posts;

// Gives us access to all the methods in tuits dao
import { json } from "express";
import * as tuitsDao from "../../tuits/tuits-dao.js";

const createTuit = async (req, res) => {
  console.log("Creating tuit");
  console.log("User ID:", req.body.userId);
  console.log("User Imdb:", req.body.imdbID);

  try {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 0;

    // Ensure the userId and handle are provided
    newTuit.userId = req.body.userId || null; // Assuming you have the userId available in the request object
    console.log("User ID on tuit:", newTuit.userId);
    newTuit.handle = newTuit.handle || "handle";
    newTuit.username = req.body.username || "username";

    // Set default values if not provided
    newTuit.time = newTuit.time || "1 hr";
    newTuit.image = newTuit.image || "spacex.png";
    newTuit.topic = newTuit.topic || "topic";
    newTuit.imdbID = newTuit.imdbID || [];

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
