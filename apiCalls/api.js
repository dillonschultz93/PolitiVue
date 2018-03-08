const federal = require("./federalAPI.js")
const news = require("./news.js")

const api = {
  federal: {

    getRepsByZip: function (zip) {
      return federal.getRepsByZipcode(zip)
    }
  },
  news: {
    getNews: function(search) {
      return news.getNews(search)
    }
  }


}

module.exports = api