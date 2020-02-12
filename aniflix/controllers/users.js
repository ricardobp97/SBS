var User = require('../models/users')
var Anime = require('../models/animes')
var Rule = require('../models/rules')

module.exports.getUserInfo = (id) => {
    return User
        .find({_id: id})
        .exec()
}

module.exports.getAnimesByGenre = (c,t,g,a) => {
    var query = {}
    query[g] = 1
    query['cluster'] = c
    query['type'] = t
    query['_id'] = { $not: {$in: a}}
    return Anime
        .find(query).sort({rating: -1, members: -1}).limit(50)
        .exec()
}

module.exports.getAnimesByRating = (t,a) => {
    var query = {}
    query['type'] = t
    query['_id'] = { $not: {$in: a}}
    return Anime
        .find(query).sort({rating: -1, members: -1}).limit(50)
        .exec()
}

module.exports.getRules = () => {
    return Rule
        .find().sort({support: -1, confidence: -1})
        .exec()
}

module.exports.getAnime = (id) => {
    return Anime
        .findOne({_id: id})
        .exec()
}

module.exports.getAnimesByRatingBest = (t) => {
    var query = {}
    query['type'] = t
    return Anime
        .find(query).sort({rating: -1}).limit(50)
        .exec()
}

module.exports.getAnimesByMembersBest = (t) => {
    var query = {}
    query['type'] = t
    return Anime
        .find(query).sort({members: -1}).limit(50)
        .exec()
}