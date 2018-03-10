// require the API endpoints
const federal = require("../apiCalls/federalAPI.js")

// returning location data and government official info from Google Civic
describe(
  'Get a response from getRepsByZipcode() by passing it a zip code', () => {
    it(
      'should return a city and state strings from the Google Civic API', () => {
        return federal.getRepsByZipcode(85704).then(response => {
          expect(response.data).toBeDefined()
          expect(response.data.normalizedInput.city).toEqual('Tucson')
          expect(response.data.normalizedInput.state).toEqual('AZ')
        })
      })
      
      it('should return government official data', () => {
        return federal.getRepsByZipcode(85704).then(response => {
          expect(response.data.offices).toBeDefined()
          expect(response.data.officials).toBeDefined()
        })
      })
      
      it('should only return the President of the United States as the first offices response', () => {
          return federal.getRepsByZipcode(85742).then(response => {
            expect(response.data.offices[0].name).toBeDefined()
            expect(response.data.offices[0].name).toEqual('President of the United States')
          })
        })
        
      it('should only return Donald J. Trump as the first response', () => {
        return federal.getRepsByZipcode(85742).then(response => {
          expect(response.data.officials[0].name).toBeDefined()
          expect(response.data.officials[0].name).toEqual('Donald J. Trump')
        })
      })
    
  })