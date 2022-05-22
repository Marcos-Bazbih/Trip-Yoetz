const restaurants = require("../models/restaurant-model");

module.exports = {
    getRestaurants: async (req, res) => {
        try {
            const data = await restaurants.find().populate("comments").populate("q_a").populate("rating");
            if (data && data.length >= 1) return res.status(200).json({ success: true, data });
            res.status(404).json({ success: true, message: "no restaurants found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    getRestaurantById: async (req, res) => {
        try {
            const restaurant = await restaurants.findOne({ _id: req.params.id }).populate("comments").populate("q_a").populate("rating");
            if (restaurant) return res.status(200).json({ success: true, restaurant });
            res.status(404).json({ success: false, message: "no restaurant found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    addRestaurant: async (req, res) => {
        try {
            const { name, city, description, location, phone, activityHours, images, greenPass, link, price } = req.body;
            const restaurant = new restaurants({ name, city, description, location, phone, activityHours, images, greenPass, link, price });
            if (!restaurant) return res.status(400).json({ success: false, message: "restaurant not valid" })

            await restaurants.create(restaurant)
                .then(() => res.status(201).json({ success: true, message: "restaurant successfully added" }))
                .catch((err) => res.status(400).json({ success: false, message: err.message }))
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    updateRestaurant: async (req, res) => {
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
    deleteRestaurant: async (req, res) => {
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