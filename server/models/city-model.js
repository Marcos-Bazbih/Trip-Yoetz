const mongoose = require("mongoose");

const City = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true }
},
    { timestamps: true }
);

module.exports = mongoose.model("City", City);