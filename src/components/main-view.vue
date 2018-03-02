<template>
  <div id="mainVeiw">
    <div class="yourReps">
      <h3>Your Representatives</h3>
      <div id="repCard">
        <ul>
                    
          <li v-for="(data, index) in officials.slice(0,4)" :key='index' :class="getParty(data)"><img id="repImg" v-bind:src="data.photoUrl"><div id="centerRep">{{data.name}}, {{data.address[0].state}}</div></li>
          
        </ul> 
      </div> 
    </div>
    <div class="repMap">
        <gmap-map />
    </div>
  </div>
</template>
<script>
  import gmapMap from "./helpers/gooMap.vue"
  
  
  export default {
    name: 'mainVeiw', 
    components: {
      gmapMap
    },
    data() {
        return {                  
                officials: [
              {
              "name": "Donald J. Trump",
              "address": [
              {
              "line1": "The White House",
              "line2": "1600 Pennsylvania Avenue NW",
              "city": "Washington",
              "state": "DC",
              "zip": "20500"
              }
              ],
              "party": "Democrat",
              "phones": [
              "(202) 456-1111"
              ],
              "urls": [
              "http://www.whitehouse.gov/"
              ],
              "photoUrl": "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/PE%20Color.jpg",
              "channels": [
              {
              "type": "GooglePlus",
              "id": "+whitehouse"
              },
              {
              "type": "Facebook",
              "id": "whitehouse"
              },
              {
              "type": "Twitter",
              "id": "potus"
              },
              {
              "type": "YouTube",
              "id": "whitehouse"
              }
              ]
              },
              {
              "name": "Mike Pence",
              "address": [
              {
              "line1": "The White House",
              "line2": "1600 Pennsylvania Avenue NW",
              "city": "Washington",
              "state": "DC",
              "zip": "20500"
              }
              ],
              "party": "Republican",
              "phones": [
              "(202) 456-1111"
              ],
              "urls": [
              "http://www.whitehouse.gov/"
              ],
              "photoUrl": "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/VPE%20Color.jpg",
              "channels": [
              {
              "type": "GooglePlus",
              "id": "+whitehouse"
              },
              {
              "type": "Facebook",
              "id": "whitehouse"
              },
              {
              "type": "Twitter",
              "id": "VP"
              }
              ]
              },
              {
              "name": "John McCain",
              "address": [
              {
              "line1": "218 Russell Senate Office Building",
              "city": "Washington",
              "state": "DC",
              "zip": "20510"
              }
              ],
              "party": "Republican",
              "phones": [
              "(202) 224-2235"
              ],
              "urls": [
              "http://www.mccain.senate.gov/public/"
              ],
              "photoUrl": "http://bioguide.congress.gov/bioguide/photo/M/M000303.jpg",
              "channels": [
              {
              "type": "Facebook",
              "id": "johnmccain"
              },
              {
              "type": "Twitter",
              "id": "SenJohnMcCain"
              },
              {
              "type": "YouTube",
              "id": "SenatorJohnMcCain"
              }
              ]
              },
              {
              "name": "Jeff Flake",
              "address": [
              {
              "line1": "413 Russell Senate Office Building",
              "city": "Washington",
              "state": "DC",
              "zip": "20510"
              }
              ],
              "party": "Republican",
              "phones": [
              "(202) 224-4521"
              ],
              "urls": [
              "http://www.flake.senate.gov/public/"
              ],
              "photoUrl": "http://bioguide.congress.gov/bioguide/photo/F/F000444.jpg",
              "channels": [
              {
              "type": "Facebook",
              "id": "senatorjeffflake"
              },
              {
              "type": "Twitter",
              "id": "JeffFlake"
              },
              {
              "type": "YouTube",
              "id": "flakeoffice"
              }
              ]
              },
              {
              "name": "Martha McSally",
              "address": [
              {
              "line1": "510 Cannon House Office Building",
              "city": "Washington",
              "state": "DC",
              "zip": "20515"
              }
              ],
              "party": "Republican",
              "phones": [
              "(202) 225-2542"
              ],
              "urls": [
              "https://mcsally.house.gov/"
              ],
              "photoUrl": "https://mcsally.house.gov/sites/mcsally.house.gov/files/styles/congress_image_medium/public/wysiwyg_uploaded/az02_mcsally.jpg?itok=XDK2ccP0",
              "channels": [
              {
              "type": "Facebook",
              "id": "RepMcSally"
              },
              {
              "type": "Twitter",
              "id": "RepMcSally"
              },
              {
              "type": "YouTube",
              "id": "McSallyForCongress"
              },
              {
              "type": "YouTube",
              "id": "UCfHMG2Db0TJ_RatSBHuH8NA"
              }
              ]
              },
              {
              "name": "Doug Ducey",
              "address": [
              {
              "line1": "1700 West Washington Street,",
              "city": "Phoenix",
              "state": "AZ",
              "zip": "85007"
              }
              ],
              "party": "Republican",
              "phones": [
              "(602) 542-4331"
              ],
              "urls": [
              "http://azgovernor.gov/"
              ],
              "photoUrl": "http://www.azgovernor.gov/sites/default/files/styles/panopoly_image_half/public/governordougducey_0.jpg?itok=Q_wvQT7v",
              "emails": [
              "engage@az.gov"
              ],
              "channels": [
              {
              "type": "Twitter",
              "id": "dougducey"
              },
              {
              "type": "YouTube",
              "id": "UCi_TVbfG4I5SK6GhjYEfyVQ"
              },
              {
              "type": "Facebook",
              "id": "dougducey"
              }
              ]
              },
              {
              "name": "Jeff DeWit",
              "address": [
              {
              "line1": "1700 West Washington Street",
              "line2": "1st Floor",
              "city": "Phoenix",
              "state": "AZ",
              "zip": "85007"
              }
              ],
              "party": "Republican",
              "phones": [
              "(602) 542-7800"
              ],
              "urls": [
              "http://www.aztreasury.gov/"
              ],
              "channels": [
              {
              "type": "Twitter",
              "id": "AZTreasurer"
              }
              ]
              },
              {
              "name": "Mark Brnovich",
              "address": [
              {
              "line1": "1275 West Washington Street,",
              "city": "Phoenix",
              "state": "AZ",
              "zip": "85007"
              }
              ],
              "party": "Republican",
              "phones": [
              "(602) 542-5025"
              ],
              "urls": [
              "https://www.azag.gov/"
              ],
              "emails": [
              "aginfo@azag.gov"
              ],
              "channels": [
              {
              "type": "GooglePlus",
              "id": "+ArizonaAttorneyGeneralBrnovich"
              },
              {
              "type": "Twitter",
              "id": "GeneralBrnovich"
              }
              ]
              },
              {
              "name": "Michele Reagan",
              "address": [
              {
              "line1": "1700 W. Washington Street,",
              "city": "Phoenix",
              "state": "AZ",
              "zip": "85007"
              }
              ],
              "party": "Republican",
              "phones": [
              "(602) 542-4285"
              ],
              "urls": [
              "https://www.azsos.gov/"
              ],
              "channels": [
              {
              "type": "Facebook",
              "id": "AZSecretaryofState"
              },
              {
              "type": "Twitter",
              "id": "SecretaryReagan"
              }
              ]
              },
              {
              "name": "Joe Hart",
              "address": [
              {
              "line1": "1700 West Washington",
              "line2": "4th Floor;",
              "city": "Phoenix",
              "state": "AZ",
              "zip": "85007"
              }
              ],
              "party": "Republican",
              "phones": [
              "(602) 542-5971"
              ],
              "urls": [
              "https://asmi.az.gov/"
              ]
              },
              {
              "name": "Tom Forese",
              "address": [
              {
              "line1": "1200 W. Washington",
              "line2": "2nd Floor",
              "city": "Phoenix",
              "state": "AZ",
              "zip": "85007"
              }
              ],
              "party": "Republican",
              "phones": [
              "(602) 542-3933"
              ],
              "urls": [
              "http://www.azcc.gov/commissioners/TForese/default.html"
              ],
              "emails": [
              "Forese-web@azcc.gov"
              ]
              },
              {
              "name": "Bob Burns",
              "address": [
              {
              "line1": "1200 W. Washington",
              "line2": "2nd Floor",
              "city": "Phoenix",
              "state": "AZ",
              "zip": "85007"
              }
              ]
              }
                ]
                            
                               
            
        }
    },
    
    methods: {
        getParty: rep => rep.party === "Republican" ? "republican" : rep.party === "Democrat" ? "democrat" : "independent"
    }
  
  }
</script>
<style lang="scss" scoped>
  @import "../scss/components/normalize";
  @import "../scss/components/_typography";
  @import "../scss/components/_colors";
  
  body {
    margin: 0;
  }
  #mainVeiw {
      display: grid;
      grid-template-columns: 35% 65%; 
      width: 90%;
      margin: auto;
       
  }
  .yourReps {
      grid-column: 1/2;
      padding: 1em;
            
  }
  #repCard {
    overflow: auto;
    height: 500px;
  }
  .repMap {
      grid-column: 2/3;
      padding: 1em;
      height: 500px;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    font-family: $primary-font;
    background-color: $white;
    border-left: 5px solid $blue-primary;
    margin-bottom: 4px;
    color: $black;
    display: grid;
    grid-template-columns: 30% 70%;
  }
  h3 {
    font-size: $heading-3-size;
    font-weight: $heavy-weight;
    font-family: $heading-font;
    color: $blue-primary;
  }
  .republican {
    border-left: 5px solid $red-darkestShade;
  }
  .democrat{
    border-left: 5px solid $blue-primary;
  }
  .independent{
    border-left: 5px solid $gray;
  }
  #repImg {
    width: 55px;
    height: 70px;
    border-radius: 15px;
    margin-right: 20px;
    grid-column: 1/2;
  }
  #centerRep {
    margin: auto auto auto 0;
    grid-column: 2/3;
  }
  
  
</style>