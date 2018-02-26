const axios = require("axios")

const zipToState = function(zip) {
  return new Promise((resolve, reject) => {
     axios.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${zip}&sensor=true`)
    .then(response => {
      resolve(response.data.results)
    })
    .catch(err => {
      reject(err)
    })
  })
 
}

const trior = function () {
  axios.get("http://www.opensecrets.org/api/?method=getLegislators&id=AZ&apikey=fd03e409e77d3ce4269c95e79f386b84&output=json")
    .then(response => {
      console.log(response.data.response.legislator)
    })
}

module.exports = zipToState