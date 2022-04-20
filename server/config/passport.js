const jwtstrategy = require("passport-jwt").Strategy;
const extractjwt = require("passport-jwt").ExtractJwt;
const users = require("../models/user-model.js");

const options = {
    secretOrKey: process.env.SECRET_KEY,
    jwtFromRequest: extractjwt.fromAuthHeaderAsBearerToken()
};

const strategy = new jwtstrategy(options, (jwt_from_payloud, done) => {
    users.findById(jwt_from_payloud.user._id)
        .then(user => {
            if (user) done(null, user);
            done(null, false)
        })
        .catch(err => done(err, false))
});

module.exports = (passport) => {
    passport.use(strategy);
};