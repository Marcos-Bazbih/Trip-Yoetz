const mongoose = require("mongoose");

const Rating = new mongoose.Schema({
    itemRef: { type: mongoose.Schema.Types.ObjectId, refPath: "category" },
    category: {
        type: String,
        enum: ["Activity", "Restaurant", "Hotel"],
        required: true
    },
    rating: { type: Number, required: true },
    user_id: { type: String, required: true }
},
    { timestamps: true }
);

module.exports = mongoose.model("Rating", Rating);