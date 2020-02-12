const mongoose = require('mongoose')

var animeSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    type: String,
    episodes: Number,
    rating: Number,
    members: Number,
    action: Number,
    romance: Number,
    adventure: Number,
    comedy: Number,
    drama: Number,
    fantasy: Number,
    school: Number,
    music: Number,
    slice_of_life: Number,
    mecha: Number,
    sci_fi: Number,
    kids: Number,
    others: Number,
    cluster: Number
})

module.exports = mongoose.model('anime', animeSchema)