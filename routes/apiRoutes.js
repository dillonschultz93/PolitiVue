var express = require("express")
// var db = require("../models")
var router = express.Router()
var api = require("../apiCalls/api.js")

router.get("/home", (req, res) => {
  api.federal.getHome().then(results => {
    console.log(results.data)
    res.json(results.data)
  }).catch(err => {
    console.error(err)
  }) 
})

router.get("/home/:zip", (req, res) => {
  api.federal.getRepsByZip(req.params.zip).then(results => {
    console.log(results.data)
    res.json(results.data)
  }).catch(err => console.error(err))
})

module.exports = router