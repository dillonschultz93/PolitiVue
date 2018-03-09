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

describe('Axios should return API results', () => {
  test('API results', () => {
    expect('getRepsByZip').toContain('offices');
  })
})



/////////////////EXAMPLE TESTS///////////////


// const shoppingList = [
//     'diapers',
//     'kleenex',
//     'trash bags',
//     'paper towels',
//     'beer',
//   ];
  
//   describe('Check the array above', () => {
//     test('the shopping list has beer on it', () => {
//       expect(shoppingList).toContain('beer');
//     })
//   })
//   describe('search-bar.vue', () =>{
//     test('setup correctly', () => {
//         expect(true).toBe(true)
//     })
//   })