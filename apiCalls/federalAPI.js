const axios = require("axios")

const myFederalRepsApi = {
  getUpcomingElections: function (zip) {
    return new Promise((resolve, reject) => {
      let url = `https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyAov7i7_mVL5By-cvqtCJ_Gi2VYrnCPHW4`
      axios
        .get(url)
        .then(response => {
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  getRepsByZipcode: function (zip) {
    return new Promise((resolve, reject) => {
      let url = `https://whoismyrepresentative.com/getall_mems.php?zip=${zip}&output=json`
      axios
        .get(url)
        .then(response => {
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

}


module.exports = myFederalRepsApi





