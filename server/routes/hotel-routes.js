const hotelsRoutes = require("express").Router();

const { GetHotels, GetHotelById, UpdateHotel, DeleteHotel, AddHotel } = require("../controllers/hotel-controller");

hotelsRoutes.get("/", GetHotels);
hotelsRoutes.get("/:id", GetHotelById);
hotelsRoutes.post("/", AddHotel);
hotelsRoutes.put("/:id", UpdateHotel);
hotelsRoutes.delete("/:id", DeleteHotel);

module.exports = hotelsRoutes;