const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    _id: Number,
    cluster: Number,
    top_genres: String,
    animes: String
})

module.exports = mongoose.model('user', userSchema)