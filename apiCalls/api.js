const federal = require("./federalAPI.js")

const api = {
  federal: {
    getHome: function () {
      return federal.getUSArepsForHome()
    },

    getRepsByZip: function (zip) {
      return federal.getRepsByZipcode(zip)
    },
    
    getElections: function () {
      return federal.getUpcomingElections()
    }
  }


}

module.exports = api