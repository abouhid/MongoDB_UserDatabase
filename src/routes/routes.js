const express = require("express");
const routes = express.Router();

const userController = require("../controllers/userController");

routes.post("/users", userController.insert);
routes.get("/users", userController.index);
routes.get("/users/:id", userController.details);
routes.put("/users/:id", userController.update);

module.exports = routes;
