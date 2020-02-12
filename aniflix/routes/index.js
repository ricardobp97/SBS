var express = require('express');
var router = express.Router();
var unique = require('array-unique')

var Users = require('../controllers/users')

function getItems(item) {
  var cf = item.confidence
  var l = item.lift
  var cs = item.consequent
  var is = item.items.split(",").map(i => parseInt(i,10))
  return {confidence: cf, lift: l, consequent: cs, items: is}
}

function checkRule(item, animes) {
  let tests = item.items.map(i => {
    return animes.includes(i)
  })
  let result = (tests.includes(false) || animes.includes(item.consequent) )

  return !result
}

/* GET home page. */
router.get('/', async function(req, res) {
  if(req.query.id){
    let u = await Users.getUserInfo(req.query.id)
    
    if(u == undefined){
      res.status(400).send({message: 'This user does not exist.'})
    }
    else{
      let c = u[0].cluster
      let str = u[0].top_genres.split(",")
      let first = str[0]
      let second = str[1]
      let third = str[2]
      let animes_seen = u[0].animes.split(",")

      let first_animes = await Users.getAnimesByGenre(c,req.query.type,first,animes_seen)
      if(first_animes.length < 3){
        first_animes = await Users.getAnimesByGenre(!c,req.query.type,first,animes_seen)
      }
      let second_animes = await Users.getAnimesByGenre(c,req.query.type,second,animes_seen)
      if(second_animes.length < 3){
        second_animes = await Users.getAnimesByGenre(!c,req.query.type,second,animes_seen)
      }
      let third_animes = await Users.getAnimesByGenre(c,req.query.type,third,animes_seen)
      if(third_animes.length < 3){
        third_animes = await Users.getAnimesByGenre(!c,req.query.type,third,animes_seen)
      }

      var data = {}

      let r = await Users.getRules()
      let arrayRules = r.map(i => getItems(i))
      let valideRules = arrayRules.filter(i => checkRule(i,animes_seen.map(j => parseInt(j,10))))
      let arrayIds = unique(valideRules.map(i => i.consequent))
      let animes = []
      let j = 0
      for(let i = 0; i < arrayIds.length; i++){
        let tmp = await Users.getAnime(arrayIds[i])
        if(tmp.type === req.query.type){
          animes[j] = tmp
          j++
        }
      }
      if(animes.length > 0){
        data['fourth'] = 'rules'
        data['rules'] = animes
      }
      else{
        let fourth_animes = await Users.getAnimesByRating(req.query.type,animes_seen)
        data['fourth'] = 'rating'
        data['rating'] = fourth_animes
      }

      data['first'] = first
      data['second'] = second
      data['third'] = third
      data[first] = first_animes
      data[second] = second_animes
      data[third] = third_animes

      res.send(data)
    }
  }
  else{  
    let first_animes = await Users.getAnimesByRatingBest(req.query.type)
    let second_animes = await Users.getAnimesByMembersBest(req.query.type)
    var data = {}
    data['first'] = 'rating'
    data['second'] = 'members'
    data['rating'] = first_animes
    data['members'] = second_animes
    res.send(data)
  }
})

module.exports = router