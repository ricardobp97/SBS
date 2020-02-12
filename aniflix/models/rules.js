const mongoose = require('mongoose')

var ruleSchema = new mongoose.Schema({
    _id: Number,
    suport: Number,
    confidence: Number,
    lift: Number,
    consequent: Number,
    items: String
})

module.exports = mongoose.model('rule', ruleSchema)