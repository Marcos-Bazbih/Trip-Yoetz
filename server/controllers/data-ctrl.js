const hotels = require("../models/hotel-model");
const activities = require("../models/activity-model");
const restaurants = require("../models/restaurant-model");

module.exports = {
    getAllDataByCity: async (req, res) => {
        try {
            const { city } = req.params;
            const hotelsData = await hotels.find({ city });
            const activitiesData = await activities.find({ city });
            const restaurantsData = await restaurants.find({ city });

            return res.status(200).json({
                success: true,
                hotels: hotelsData,
                activities: activitiesData,
                restaurants: restaurantsData,
            });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
};