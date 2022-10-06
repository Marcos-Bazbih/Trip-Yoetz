const mongoose = require("mongoose");
const activities = require("../models/activity-model");
const restaurants = require("../models/restaurant-model");
const hotels = require("../models/hotel-model");
const ratings = require("../models/rating-model");

module.exports = {
    getRatings: async (req, res) => {
        try {
            const data = await ratings.find().populate("itemRef");
            if (data && data.length >= 1) return res.status(200).json({ success: true, data });
            res.status(404).json({ success: true, message: "no ratings found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    getRatingsByItemId: async (req, res) => {
        try {
            const ratingsOfItem = await ratings.find({ itemRef: req.params.itemId });
            if (ratingsOfItem) return res.status(200).json({ success: true, ratingsOfItem });
            res.status(404).json({ success: false, message: "no ratings found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    getRatingById: async (req, res) => {
        try {
            const rating = await ratings.findOne({ _id: req.params.id }).populate("itemRef");
            if (rating) return res.status(200).json({ success: true, rating });
            res.status(404).json({ success: false, message: "no rating found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    addRating: async (req, res) => {
        try {
            const itemId = mongoose.Types.ObjectId(req.params.itemId);
            const { category, rating, user_id } = req.body;
            const ratingObj = new ratings({ category, rating, user_id });
            ratingObj.itemRef = itemId;

            if (!ratingObj) return res.status(400).json({ success: false, message: "rating not valid" })

            if (category === "Activity") {
                await activities.findByIdAndUpdate(itemId, { $push: { rating: ratingObj } })
            }
            else if (category === "Restaurant") {
                await restaurants.findByIdAndUpdate(itemId, { $push: { rating: ratingObj } })
            }
            else if (category === "Hotel") {
                await hotels.findByIdAndUpdate(itemId, { $push: { rating: ratingObj } })
            }

            let newRating = await ratings.create(ratingObj);
            newRating = await newRating.populate([
                {
                    path: "itemRef",
                    populate: {
                        path: 'rating',
                        model: 'Rating'
                    }
                },
            ])
                .then((result) => res.status(201).json({ success: true, rating: result }))
                .catch((err) => res.status(400).json({ success: false, message: err.message }))
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    updateRating: async (req, res) => {
        try {
            const rating = await ratings.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
                .populate([
                    {
                        path: "itemRef",
                        populate: {
                            path: 'rating',
                            model: 'Rating',
                        }
                    },
                ])
            if (rating) return res.status(200).json({ success: true, rating });
            res.status(404).json({ success: false, message: "no comment found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    deleteRating: async (req, res) => {
        try {
            const rating = await ratings.findOneAndDelete({ _id: req.params.id });
            if (rating) {
                if (rating.category === "Activity") {
                    await activities.findByIdAndUpdate(rating.itemRef, { $pull: { rating: rating._id } })
                }
                else if (rating.category === "Restaurant") {
                    await restaurants.findByIdAndUpdate(rating.itemRef, { $pull: { rating: rating._id } })
                }
                else if (rating.category === "Hotel") {
                    await hotels.findByIdAndUpdate(rating.itemRef, { $pull: { rating: rating._id } })
                }
                return res.status(200).json({ success: true, message: "rating successfully deleted" });
            }
            res.status(404).json({ success: false, message: "no rating found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
};