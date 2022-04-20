const restaurantsRoutes = require("express").Router();

const { GetRestaurants,GetRestaurantById, AddRestaurant, UpdateRestaurant, DeleteRestaurant } = require("../controllers/restaurant-controller");

restaurantsRoutes.get("/", GetRestaurants);
restaurantsRoutes.get("/:id", GetRestaurantById);
restaurantsRoutes.post("/", AddRestaurant);
restaurantsRoutes.put("/:id", UpdateRestaurant);
restaurantsRoutes.delete("/:id", DeleteRestaurant);

module.exports = restaurantsRoutes;