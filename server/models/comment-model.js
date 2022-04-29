const mongoose = require("mongoose");

const Comment = new mongoose.Schema({
    itemRef: { type: mongoose.Schema.Types.ObjectId, refPath: "category" },
    category: {
        type: String,
        enum: ["Activity", "Restaurant", "Hotel"],
        required: true
    },
    body: { type: String, required: true },
    writer: { type: String, required: true },
    user_id: { type: String, required: true },
    user_img: { type: String, required: true },
    date: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 }
},
    { timestamps: true }
);

module.exports = mongoose.model("Comment", Comment);