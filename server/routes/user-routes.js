const usersRoutes = require("express").Router();
const { register, login, UpdateUser } = require("../controllers/user-ctrl")

usersRoutes.post("/register", register);
usersRoutes.post("/login", login);
usersRoutes.put("/:id", UpdateUser);

module.exports = usersRoutes;