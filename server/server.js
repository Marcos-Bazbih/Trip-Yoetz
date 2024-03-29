require("dotenv").config()
require("./db")

const express = require("express")
const cors = require("cors");
const path = require('path');
const port = process.env.PORT || 9090;
const passport = require("passport");
const app = express();
const citiesRoutes = require("./routes/city-routes");
const hotelsRoutes = require("./routes/hotel-routes");
const restaurantsRoutes = require("./routes/restaurant-routes");
const activitiesRoutes = require("./routes/activity-routes");
const usersRoutes = require("./routes/user-routes");
const commentsRoutes = require("./routes/comment-routes");
const q_aRoutes = require("./routes/q_a-routes");
const ratingsRoutes = require("./routes/rating-routes");
const dataRoutes = require("./routes/data-routes");

require("./config/passport")(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => console.log(`server up on port ${port}`));

app.use(passport.initialize());

app.use("/api/cities", citiesRoutes);
app.use("/api/hotels", hotelsRoutes);
app.use("/api/restaurants", restaurantsRoutes);
app.use("/api/activities", activitiesRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/q_a", q_aRoutes);
app.use("/api/ratings", ratingsRoutes);
app.use("/api/data", dataRoutes);
app.use("/auth", usersRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
};