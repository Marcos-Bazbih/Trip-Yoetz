const activities = require("../models/activity-model");
const comments = require("../models/comment-model");

module.exports = {
    getActivities: async (req, res) => {
        try {
            const data = await activities.find().populate("comments");
            if (data && data.length >= 1) return res.status(200).json({ success: true, data });
            res.status(404).json({ success: true, message: "no activities found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    getActivityById: async (req, res) => {
        try {
            const activity = await activities.findOne({ _id: req.params.id }).populate();
            if (activity) return res.status(200).json({ success: true, activity });
            res.status(404).json({ success: false, message: "no activity found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    addActivity: async (req, res) => {
        try {
            const { name, city, description, location, phone, activityHours, images, greenPass, link, price } = req.body;
            const activity = new activities({ name, city, description, location, phone, activityHours, images, greenPass, link, price });
            if (!activity) return res.status(400).json({ success: false, message: "activity not valid" })

            await activities.create(activity)
                .then(() => res.status(201).json({ success: true, message: "activity successfully added" }))
                .catch((err) => res.status(400).json({ success: false, message: err.message }))
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    updateActivity: async (req, res) => {
        try {
            if (await activities.exists({ _id: req.params.id })) {
                return await activities.findByIdAndUpdate(req.params.id, req.body)
                    .then(() => res.status(200).json({ success: true, message: "activity updated successfully" }))
                    .catch((err) => res.status(400).json({ success: false, message: err.message }))
            }
            res.status(404).json({ success: false, message: "no activity found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    deleteActivity: async (req, res) => {
        try {
            if (await activities.exists({ _id: req.params.id })) {
                return await activities.findByIdAndRemove(req.params.id)
                    .then(() => res.status(200).json({ success: true, message: "activity deleted successfully" }))
                    .catch(err => res.status(400).json({ success: false, message: err.message }))
            }
            res.status(404).json({ success: false, message: "no activity found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        };
    }
};