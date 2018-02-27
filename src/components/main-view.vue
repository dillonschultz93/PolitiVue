<template>
  <div id="mainVeiw">
    <div class="yourReps">
      
      <ul>
        <h3>Your Representatives</h3>
        <li v-for="(data, index) in results" :key='index'>{{data.name}}, {{data.party}}, {{data.state}}</li>
      </ul>  
    </div>

    <div class="repMap">
        <!-- <img src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
            &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
            &markers=color:red%7Clabel:C%7C40.718217,-73.998284
            &key=AIzaSyCTM6kafG8RQwi0qStGmMMqwK30VV52Enc" alt="google static map"> -->
    </div>
  </div>
</template>

<script>

  
  
  export default {
    name: 'mainVeiw',  
    data() {
        return {                  
                results: [
                  {
                  "name": "Martha McSally",
                  "party": "Republican",
                  "state": "AZ",
                  "district": "2",
                  "phone": "202-225-2542",
                  "office": "510 Cannon HOB; Washington DC 20515-0302",
                  "link": "https://mcsally.house.gov"
                  },
                  {
                  "name": "Jeff Flake",
                  "party": "Republican",
                  "state": "AZ",
                  "district": "",
                  "phone": "202-224-4521",
                  "office": "413 Russell Senate Office Building Washington DC 20510",
                  "link": "http://www.flake.senate.gov/public"
                  },
                  {
                  "name": "John McCain",
                  "party": "Republican",
                  "state": "AZ",
                  "district": "",
                  "phone": "202-224-2235",
                  "office": "218 Russell Senate Office Building Washington DC 20510",
                  "link": "http://www.mccain.senate.gov"
                  },
                  {
                  "name": "Frank Underwood",
                  "party": "Democrat",
                  "state": "GA",
                  "district": "",
                  "phone": "202-224-2235",
                  "office": "218 Russell Senate Office Building Washington DC 20510",
                  "link": "http://www.mccain.senate.gov"
                  },
                  {
                  "name": "Hillary Clinton",
                  "party": "Democrat",
                  "state": "NY",
                  "district": "",
                  "phone": "202-224-2235",
                  "office": "218 Russell Senate Office Building Washington DC 20510",
                  "link": "http://www.mccain.senate.gov"
                  }
                  ]
                  
              }
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
      height: 100%;  
  }

  .yourReps {
      grid-column: 1/2;
      padding: 1em;
  }

  .repMap {
      grid-column: 2/3;
      padding: 1em;
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
  }
  h3 {
    font-size: $heading-3-size;
    font-weight: $heavy-weight;
    font-family: $heading-font;
  }
  
  
</style>