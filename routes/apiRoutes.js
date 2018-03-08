var express = require("express")
var db = require("../models")
var router = express.Router()
var api = require("../apiCalls/api.js")
var bcrypt = require("bcrypt-nodejs")

router.get("/api/:zip", (req, res) => {
  api.federal.getRepsByZip(req.params.zip).then(results => {
    res.json(results.data)
  }).catch(err => console.error(err))
})

router.get("api/news", (req, res) => {
  api.news.getNews("Arizona").then(news => {
    res.json(news.data)
  }).catch(err => console.error(err))
})

router.post("/api/signup", (req, res) => {
  db.User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (user) return res.send("User already taken")
    else {
      var userPassword = bcrypt.hashSync(req.body.psw)
      var full_name = req.body.first_name + " " + req.body.last_name
      db.User.create({
        email: req.body.email,
        full_name: full_name,
        zipcode: req.body.zip_code,
        password: userPassword
      }).then(result => {
        console.log(result)
        res.send("User Registered")
      })
    }
  }).catch(err => {
    console.error(err)
    res.sendStatus(504)
  })
})

router.post('/api/signin', (req, res) => {
  console.log(req.body)
  db.User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    console.log(user)
    if(!user) return res.send("User Not Found")
    else if (bcrypt.compareSync(req.body.psw, user.password)) {
      res.send(user.full_name)
    }
    else {
      res.send("Password Incorrect")
    }
  }).catch(err => {
    console.error(err)
    res.sendStatus(504)
  })
})

module.exports = router