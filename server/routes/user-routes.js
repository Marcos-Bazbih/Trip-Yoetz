const usersRoutes = require("express").Router();
const { register, login,Updateuser } = require("../controllers/user-controller")

usersRoutes.post("/register", register);
usersRoutes.post("/login", login);
usersRoutes.put("/:id",Updateuser)
module.exports = usersRoutes;