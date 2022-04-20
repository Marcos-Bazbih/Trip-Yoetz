const CONNECTION_STRING = process.env.STRING_CONNECTION ;
const mongoose = require("mongoose")

mongoose.connect(CONNECTION_STRING , { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("mongoose is connect"))
    .catch(err => console.log(err))

module.exports = mongoose.connection;