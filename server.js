var express = require("express")
var bodyParser = require("body-parser")

var app = express();
var PORT = process.env.PORT || 3000;

//setup static files
app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//routing
var routes = require("./routes/apiRoutes.js")

app.use(routes)

//Connect to port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})