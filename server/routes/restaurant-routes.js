const restaurantsRoutes = require("express").Router();

const { getRestaurants, getRestaurantById, addRestaurant, updateRestaurant, deleteRestaurant } = require("../controllers/restaurant-ctrl");

restaurantsRoutes.get("/", getRestaurants);
restaurantsRoutes.get("/:id", getRestaurantById);
restaurantsRoutes.post("/", addRestaurant);
restaurantsRoutes.put("/:id", updateRestaurant);
restaurantsRoutes.delete("/:id", deleteRestaurant);

module.exports = restaurantsRoutes;