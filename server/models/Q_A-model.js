const mongoose = require("mongoose");

const Q_A = new mongoose.Schema({
    itemRef: { type: mongoose.Schema.Types.ObjectId, refPath: "category" },
    category: {
        type: String,
        enum: ["Activity", "Restaurant", "Hotel"],
        required: true
    },
    writer_name: { type: String, required: true },
    writer_id: { type: String, required: true },
    writer_img: { type: String, required: true },
    question: { type: String, required: true },
    q_date: { type: Date, default: Date.now },
    admin_name: { type: String },
    admin_id: { type: String },
    admin_img: { type: String },
    answer: { type: String },
    a_date: { type: Date},
},
    { timestamps: true }
);

module.exports = mongoose.model("Q_A", Q_A);