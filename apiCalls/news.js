const axios = require("axios")

const getNews = function (search) {
  return new Promise((resolve, reject) => {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json`
    axios(url, {
      params: {
        "api-key": "2f4402d1471c401b94141b06baba1db1",
        "q": search
      }
    }).then(results => {
      resolve(results)
    }).catch(err => reject(err))
  })
}

  module.exports = getNews