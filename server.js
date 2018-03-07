var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")
var db = require("./models")

var app = express();
var PORT = process.env.PORT || 3000;

//setup static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static("dist"));
}

app.use(express.static("src"))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//routing
var routes = require("./routes/apiRoutes.js")

app.use(routes)

if (process.env.NODE_ENV === 'production') {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'))
  });
}

//Connect to port
db.sequelize.sync({}).then(response => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
}).catch(err => console.error("Error connecting: " + err))
