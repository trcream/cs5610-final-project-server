import * as usersDao from "./users-dao.js";
// import people from "./users.js";
// let users = people;

const UserController = (app) => {
  // app.get("/api/users", findUsers);
  app.get("/api/users", findAllUsers);

  app.get("/api/users/:uid", findUserById);
  app.post("/api/users", createUser);
  app.delete("/api/users/:uid", deleteUser);
  // app.put("/api/users/:uid", updateUser);
  app.put("/api/users/update/:uid", updateUser);

  // end point for following and unfollowing users
  app.post("/api/users/:uid/follow/:otherUserId", followUser);
  app.post("/api/users/:uid/unfollow/:otherUserId", unfollowUser);

  // Endpoint to get the users that the current user follows
  // app.get("/api/users/:uid/following", getFollowingUsers);
};

const findAllUsers = async (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  if (username && password) {
    const user = await usersDao.findUserByCredentials(username, password);
    if (user) {
      res.json(user);
    } else {
      res.sendStatus(404);
    }
  } else if (username) {
    const user = await usersDao.findUserByUsername(username);
    if (user) {
      res.json(user);
    } else {
      res.sendStatus(404);
    }
  } else {
    const users = await usersDao.findAllUsers();
    res.json(users);
  }
};

const findUserById = async (req, res) => {
  const id = req.params.uid;
  // const id = req.params.id;

  // Using the DAO which is connected to mongoose db insted of the array
  const user = await usersDao.findUserById(id);
  res.json(user);
};

const createUser = async (req, res) => {
  console.log("Users-controller: Creating user");
  const newUser = await usersDao.createUser(req.body);
  console.log("Users-controller: Creating user");

  res.json(newUser);
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const status = await usersDao.deleteUser(id);
  res.json(status);
};

const updateUser = async (req, res) => {
  console.log("Update user from users-controller.js ");
  const id = req.params.uid;
  console.log("XXXXXX id: " + id);
  const status = await usersDao.updateUser(id, req.body);
  const user = await usersDao.findUserById(id);
  req.session["currentUser"] = user;
  res.json(status);
};

const followUser = async (req, res) => {
  const uid = req.params.uid;
  const otherUserId = req.params.otherUserId;
  const status = await usersDao.followUser(uid, otherUserId);
  res.json(status);
};

const unfollowUser = async (req, res) => {
  const uid = req.params.uid;
  const otherUserId = req.params.otherUserId;
  const status = await usersDao.unfollowUser(uid, otherUserId);
  res.json(status);
};

export default UserController;
