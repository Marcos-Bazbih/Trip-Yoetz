const activitiesRoutes = require("express").Router();

const { GetActivities,GetActivityById, AddActivity, UpdateActivity, DeleteActivity } = require("../controllers/activity-controller");

activitiesRoutes.get("/", GetActivities);
activitiesRoutes.get("/:id", GetActivityById);
activitiesRoutes.post("/", AddActivity);
activitiesRoutes.put("/:id", UpdateActivity);
activitiesRoutes.delete("/:id", DeleteActivity);

module.exports = activitiesRoutes;