const mongoose = require("mongoose");
const activities = require("../models/activity-model");
const restaurants = require("../models/restaurant-model");
const hotels = require("../models/hotel-model");
const Q_A = require("../models/q_a-model");

module.exports = {
    getQ_A: async (req, res) => {
        try {
            const data = await Q_A.find().populate("itemRef");
            if (data && data.length >= 1) return res.status(200).json({ success: true, data });
            res.status(404).json({ success: true, message: "no q_a found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    getQ_AById: async (req, res) => {
        try {
            const q_a = await Q_A.findOne({ _id: req.params.id }).populate("itemRef");
            if (q_a) return res.status(200).json({ success: true, q_a });
            res.status(404).json({ success: false, message: "no q_a found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    addQ_A: async (req, res) => {
        try {
            const itemId = mongoose.Types.ObjectId(req.params.itemId);
            const { category, writer_name, writer_id, writer_img, question } = req.body;
            const q_a = new Q_A({ category, writer_name, writer_id, writer_img, question });
            q_a.itemRef = itemId;
            if (!q_a) return res.status(400).json({ success: false, message: "q_a not valid" })

            if(category === "Activity") {
                await activities.findByIdAndUpdate(itemId, { $push: { q_a: q_a } })
            }
            else if(category === "Restaurant") {
                await restaurants.findByIdAndUpdate(itemId, { $push: { q_a: q_a } })
            }
            else if(category === "Hotel") {
                await hotels.findByIdAndUpdate(itemId, { $push: { q_a: q_a } })
            }

            await Q_A.create(q_a)
                .then(() => res.status(201).json({ success: true, message: "q_a successfully added" }))
                .catch((err) => res.status(400).json({ success: false, message: err.message }))
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    updateQ_A: async (req, res) => {
        try {
            const q_a = await Q_A.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
            if (q_a) return res.status(200).json({ success: true, q_a });
            res.status(404).json({ success: false, message: "no q_a found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    deleteQ_A: async (req, res) => {
        try {
            const q_a = await Q_A.findOneAndDelete({ _id: req.params.id });
            if (q_a) {
                if (q_a.category === "Activity") {
                    await activities.findByIdAndUpdate(q_a.itemRef, { $pull: { q_a: q_a._id } })
                }
                else if (q_a.category === "Restaurant") {
                    await restaurants.findByIdAndUpdate(q_a.itemRef, { $pull: { q_a: q_a._id } })
                }
                else if (q_a.category === "Hotel") {
                    await hotels.findByIdAndUpdate(q_a.itemRef, { $pull: { q_a: q_a._id } })
                }
                return res.status(200).json({ success: true, message: "q_a successfully deleted" });
            }
            res.status(404).json({ success: false, message: "no q_a found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
};