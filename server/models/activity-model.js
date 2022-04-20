const mongoose = require("mongoose");

const Activity = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String, required: true },
    activitiesHours: { type: String, required: true },
    images: { type: Array, required: true },
    comments: { type: Array },
    greenPass: { type: Boolean, required: true },
    rating: { type: Array},
    q_a: {type: Array} ,
    link: { type: String, required: true },
    price: { type: Array},
    category: { type: String, default: "activity" }
},
    { timestamps: true }
);

module.exports = mongoose.model("Activity", Activity);