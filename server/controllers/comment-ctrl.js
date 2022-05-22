const mongoose = require("mongoose");
const activities = require("../models/activity-model");
const restaurants = require("../models/restaurant-model");
const hotels = require("../models/hotel-model");
const comments = require("../models/comment-model");

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
            const { category, body, writer_name, writer_id, writer_img } = req.body;
            const comment = new comments({ category, body, writer_name, writer_id, writer_img });
            comment.itemRef = itemId;
            if (!comment) return res.status(400).json({ success: false, message: "comment not valid" })

            if (category === "Activity") {
                await activities.findByIdAndUpdate(itemId, { $push: { comments: comment } })
            }
            else if (category === "Restaurant") {
                await restaurants.findByIdAndUpdate(itemId, { $push: { comments: comment } })
            }
            else if (category === "Hotel") {
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
            if (comment) {
                if (comment.category === "Activity") {
                    await activities.findByIdAndUpdate(comment.itemRef, { $pull: { comments: comment._id } })
                }
                else if (comment.category === "Restaurant") {
                    await restaurants.findByIdAndUpdate(comment.itemRef, { $pull: { comments: comment._id } })
                }
                else if (comment.category === "Hotel") {
                    await hotels.findByIdAndUpdate(comment.itemRef, { $pull: { comments: comment._id } })
                }
                return res.status(200).json({ success: true, message: "comment successfully deleted" });
            }
            res.status(404).json({ success: false, message: "no comment found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
};