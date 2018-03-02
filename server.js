var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")

var app = express();
var PORT = process.env.PORT || 3000;

//setup static files
if(process.env.NODE_ENV === 'production'){
  app.use(express.static("dist"));
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//routing
var routes = require("./routes/apiRoutes.js")

app.use(routes)

if(process.env.NODE_ENV === 'production'){
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'))
  });
}

//Connect to port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})