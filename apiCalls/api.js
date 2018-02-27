const federal = require("./federalAPI.js")

const api = {
  federal: {
    getHome: function () {
      return federal.getUpcomingElections()
    },

    getRepsByZip: function (zip) {
      return federal.getRepsByZipcode(zip)
    }
    
  }


}

module.exports = api