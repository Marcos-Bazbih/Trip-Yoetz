const mongoose = require("mongoose");

const Hotel = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String, required: true },
    activityHours: { type: String, required: true },
    images: { type: Array, required: true },
    greenPass: { type: Boolean, required: true },
    comments: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
    // rating: { type: [mongoose.Schema.Types.ObjectId], ref: "Rating" },
    // q_a: { type: [mongoose.Schema.Types.ObjectId], ref: "Q_A" },
    link: { type: String, required: true },
    price: { type: Array, required: true },
    description: { type: String, required: true },
    category: { type: String, default: "hotel" }
},
    { timestamps: true }
);

module.exports = mongoose.model("Hotel", Hotel);