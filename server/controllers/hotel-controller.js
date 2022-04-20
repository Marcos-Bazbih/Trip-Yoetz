const hotels = require("../models/hotel-model");

module.exports = {
    GetHotels: async (req, res) => {
        try {
            const data = await hotels.find();
            if (data && data.length >= 1) return res.status(200).json({ success: true, data });
            res.status(404).json({ success: false, message: "no hotels found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    GetHotelById: async (req, res) => {
        try {
            const hotel = await hotels.findOne({ _id: req.params.id });
            if (hotel) return res.status(200).json({ success: true, hotel });
            res.status(404).json({ success: false, message: "no hotel found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    AddHotel: async (req, res) => {
        try {
            const { name, location, phone, activitiesHours, description, city, comments, greenPass, images, link, price, q_a, rating } = req.body;
            const hotel = new hotels({ name, location, phone, activitiesHours, description, city, comments, greenPass, images, link, price, q_a, rating });
            if (!hotel) return res.status(400).json({ success: false, message: "hotel not valid" })

            await hotels.create(hotel)
                .then(() => res.status(201).json({ success: true, message: "hotel successfully added" }))
                .catch((err) => res.status(400).json({ success: false, message: err.message }))
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    UpdateHotel: async (req, res) => {
        try {
            if (await hotels.exists({ _id: req.params.id })) {
                return await hotels.findByIdAndUpdate(req.params.id, req.body)
                    .then(() => res.status(200).json({ success: true, message: "hotel updated successfully" }))
                    .catch((err) => res.status(400).json({ success: false, message: err.message }))
            }
            res.status(404).json({ success: false, message: "no hotel found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    DeleteHotel: async (req, res) => {
        try {
            if (await hotels.exists({ _id: req.params.id })) {
                return await hotels.findByIdAndRemove(req.params.id)
                    .then(() => res.status(200).json({ success: true, message: "hotel deleted successfully" }))
                    .catch(err => res.status(400).json({ success: false, message: err.message }))
            }
            res.status(404).json({ success: false, message: "no hotel found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        };
    }
};