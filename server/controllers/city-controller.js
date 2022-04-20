const cities = require("../models/city-model");

module.exports = {
    GetCities: async (req, res) => {
        try {
            const data = await cities.find();
            if (data && data.length >= 1) return res.status(200).json({ success: true, data });
            res.status(404).json({ success: false, message: "no cities found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    GetCityByName: async (req, res) => {
        try {
            const data = await cities.findOne({ name: req.params.name });
            if (data) return res.status(200).json({ success: true, data });
            res.status(404).json({ success: false, message: "no city found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    AddCity: async (req, res) => {
        try {
            const { name, description, images } = req.body;
            const city = new cities({ name, description, images });
            if (!city) return res.status(400).json({ success: false, message: "city not valid" })

            await cities.create(city)
                .then(() => res.status(201).json({ success: true, message: "city successfully added" }))
                .catch((err) => res.status(400).json({ success: false, message: err.message }))
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    UpdateCity: async (req, res) => {
        try {
            if (await cities.exists({ _id: req.params.id })) {
                return await cities.findByIdAndUpdate(req.params.id, req.body)
                    .then(() => res.status(200).json({ success: true, message: "city updated successfully" }))
                    .catch((err) => res.status(400).json({ success: false, message: err.message }))
            }
            res.status(404).json({ success: false, message: "no city found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    DeleteCity: async (req, res) => {
        try {
            if (await cities.exists({ _id: req.params.id })) {
                return await cities.findByIdAndRemove(req.params.id)
                    .then(() => res.status(200).json({ success: true, message: "city deleted successfully" }))
                    .catch(err => res.status(400).json({ success: false, message: err.message }))
            }
            res.status(404).json({ success: false, message: "no city found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        };
    }
};