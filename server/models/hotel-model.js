const mongoose = require("mongoose");

const Hotel = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String, required: true },
    activitiesHours: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true },
    comments: { type: Array},
    greenPass: { type: Boolean, required: true },
    rating: { type: Array },
    q_a: { type: Array },
    link: { type: String, required: true },
    price: { type: Array},
    city: { type: String, required: true },
    category: { type: String, default: "hotel" }
},
    { timestamps: true }
);

module.exports = mongoose.model("Hotel", Hotel);