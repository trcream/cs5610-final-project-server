import * as actorsDao from "./actors-dao.js";

const createActor = async (req, res) => {
  // console.log("Creating Actor Object");
  const { name, imdbId } = req.body;
  // console.log("JSON.stringify(req.body) is: " + JSON.stringify(req.body));

  try {
    const newActor = {
      name,
      imdbIds: [imdbId],
    };

    const insertedActor = await actorsDao.createActor(newActor);
    res.json(insertedActor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create actor object" });
  }
};

const updateActorByName = async (req, res) => {
  console.log("Updating Actor Object");
  const name = req.params.name;
  const updatedActor = req.body;

  try {
    const existingActor = await actorsDao.findActorByName(name);

    if (!existingActor) {
      res.status(404).json({ error: "Actor not found" });
      return;
    }

    const status = await actorsDao.updateActorByName(name, updatedActor);
    res.json(status);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update actor" });
  }
};

const findActorByName = async (req, res) => {
  console.log("Finding Actor Object");
  const name = req.params.name;
  const actor = await actorsDao.findActorByName(name);
  res.json(actor);
};

export default (app) => {
  app.post("/api/actors", createActor);
  app.get("/api/actors/name/:name", findActorByName);
  app.put("/api/actors/name/:name", updateActorByName);
};
