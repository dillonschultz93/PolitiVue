var express = require("express")
var db = require("../models")
var router = express.Router()
var api = require("../apiCalls/api.js")
var bcrypt = require("bcrypt-nodejs")

router.get("/api", (req, res) => {
  api.federal.getHome().then(results => {
    console.log(results.data)
    res.json(results.data)
  }).catch(err => {
    console.error(err)
  })
})

router.get("/api/:zip", (req, res) => {
  api.federal.getRepsByZip(req.params.zip).then(results => {
    console.log(results.data)
    res.json(results.data)
  }).catch(err => console.error(err))
})

router.get("/api/elections", (req, res) => {
  api.federal.getElections().then(results => {
    res.json(results.data)
  })
})

router.post("/api/signup", (req, res) => {
  console.log(req.body)
  db.User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    console.log(user)
    if (user) return res.send("User already taken")
    else {
      var userPassword = bcrypt.hashSync(req.body.psw)
      console.log(userPassword)
      var full_name = req.body.first_name + " " + req.body.last_name
      db.User.create({
        email: req.body.email,
        full_name: full_name,
        zipcode: req.body.zip_code,
        party: req.body.party,
        password: userPassword
      }).then(result => {
        console.log(result)
        res.send("User Registered")
      })
    }
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
      res.send("You are signed in")
    }
    else {
      res.send("Password Incorrect")
    }
  })
})

module.exports = router