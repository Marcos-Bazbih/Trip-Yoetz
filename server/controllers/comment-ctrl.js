const mongoose = require("mongoose");
const comments = require("../models/comment-model");
const activities = require("../models/activity-model");
const restaurants = require("../models/restaurant-model");
const hotels = require("../models/hotel-model");

module.exports = {
    getComments: async (req, res) => {
        try {
            const data = await comments.find().populate("itemRef");
            if (data && data.length >= 1) return res.status(200).json({ success: true, data });
            res.status(404).json({ success: true, message: "no comments found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    getCommentById: async (req, res) => {
        try {
            const comment = await comments.findOne({ _id: req.params.id }).populate("itemRef");
            if (comment) return res.status(200).json({ success: true, comment });
            res.status(404).json({ success: false, message: "no comment found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    addComment: async (req, res) => {
        try {
            const itemId = mongoose.Types.ObjectId(req.params.itemId);
            const { body, writer, user_id, user_img, category } = req.body;
            const comment = new comments({ body, writer, user_id, user_img, category });
            comment.itemRef = itemId;
            if (!comment) return res.status(400).json({ success: false, message: "comment not valid" })

            if(category === "Activity") {
                await activities.findByIdAndUpdate(itemId, { $push: { comments: comment } })
            }
            else if(category === "Restaurant") {
                await restaurants.findByIdAndUpdate(itemId, { $push: { comments: comment } })
            }
            else if(category === "Hotel") {
                await hotels.findByIdAndUpdate(itemId, { $push: { comments: comment } })
            }
            

            await comments.create(comment)
                .then(() => res.status(201).json({ success: true, message: "comment successfully added" }))
                .catch((err) => res.status(400).json({ success: false, message: err.message }))
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    updateComment: async (req, res) => {
        try {
            const comment = await comments.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
            if (comment) return res.status(200).json({ success: true, comment });
            res.status(404).json({ success: false, message: "no comment found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    deleteComment: async (req, res) => {
        try {
            const comment = await comments.findOneAndDelete({ _id: req.params.id });
            if (comment) return res.status(200).json({ success: true, message: "comment successfully deleted" });
            res.status(404).json({ success: false, message: "no comment found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
};