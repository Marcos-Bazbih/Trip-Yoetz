const activitiesRoutes = require("express").Router();

const { getActivities, getActivityById, addActivity, updateActivity, deleteActivity } = require("../controllers/activity-ctrl");

activitiesRoutes.get("/", getActivities);
activitiesRoutes.get("/:id", getActivityById);
activitiesRoutes.post("/", addActivity);
activitiesRoutes.put("/:id", updateActivity);
activitiesRoutes.delete("/:id", deleteActivity);

module.exports = activitiesRoutes;