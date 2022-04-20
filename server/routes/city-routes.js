const citiesRoutes = require("express").Router();

const { GetCities, GetCityByName, AddCity, UpdateCity, DeleteCity } = require("../controllers/city-controller");

citiesRoutes.get("/", GetCities);
citiesRoutes.get("/:name", GetCityByName);
citiesRoutes.post("/", AddCity);
citiesRoutes.put("/:id", UpdateCity);
citiesRoutes.delete("/:id", DeleteCity);

module.exports = citiesRoutes;