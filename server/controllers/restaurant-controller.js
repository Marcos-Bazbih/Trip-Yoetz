const restaurants = require("../models/restaurant-model");

module.exports = {
    GetRestaurants: async (req, res) => {
        try {
            const data = await restaurants.find();
            if (data && data.length >= 1) return res.status(200).json({ success: true, data });
            res.status(404).json({ success: false, message: "no restaurants found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    GetRestaurantById: async (req, res) => {
        try {
            const restaurant = await restaurants.findOne({ _id: req.params.id });
            if (restaurant) return res.status(200).json({ success: true, restaurant });
            res.status(404).json({ success: false, message: "no restaurant found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    AddRestaurant: async (req, res) => {
        try {
            const { name, city, description, images, location, phone, comments, greenPass, rating, q_a, link, activitiesHours, price } = req.body;
            const restaurant = new restaurants({ name, city, description, images, location, phone, comments, greenPass, rating, q_a, link, activitiesHours, price });
            if (!restaurant) return res.status(400).json({ success: false, message: "restaurant not valid" })

            await restaurants.create(restaurant)
                .then(() => res.status(201).json({ success: true, message: "restaurant successfully added" }))
                .catch((err) => res.status(400).json({ success: false, message: err.message }))
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    UpdateRestaurant: async (req, res) => {
        try {
            if (await restaurants.exists({ _id: req.params.id })) {
                return await restaurants.findByIdAndUpdate(req.params.id, req.body)
                    .then(() => res.status(200).json({ success: true, message: "restaurant updated successfully" }))
                    .catch((err) => res.status(400).json({ success: false, message: err.message }))
            }
            res.status(404).json({ success: false, message: "no restaurant found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    DeleteRestaurant: async (req, res) => {
        try {
            if (await restaurants.exists({ _id: req.params.id })) {
                return await restaurants.findByIdAndRemove(req.params.id)
                    .then(() => res.status(200).json({ success: true, message: "restaurant deleted successfully" }))
                    .catch(err => res.status(400).json({ success: false, message: err.message }))
            }
            res.status(404).json({ success: false, message: "no restaurant found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        };
    }
};