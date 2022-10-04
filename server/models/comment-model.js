const mongoose = require("mongoose");

const Comment = new mongoose.Schema({
    itemRef: { type: mongoose.Schema.Types.ObjectId, refPath: "category" },
    category: {
        type: String,
        enum: ["Activity", "Restaurant", "Hotel"],
        required: true
    },
    body: { type: String, required: true },
    writer_name: { type: String, required: true },
    writer_id: { type: String, required: true },
    writer_img: { type: String, required: true },
    likes: { type: Object, default: { amount: 0, users_Id: [] } },
},
    { timestamps: true }
);

module.exports = mongoose.model("Comment", Comment);