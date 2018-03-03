<template>
      <div id="repCard">
        <ul v-if="representatives.length">        
          <li v-for="representative in representatives">
            <!-- <img>
            <div></div> -->
            {{ representative.position }}
          </li>
        </ul> 
      </div> 

</template>
<script> 
  
  import bus from '../eventBus.js'
  
  export default {
    name: 'repCard', 
    
    mounted() {
      bus.$on('representatives', (representatives) => {
        this.representatives = representatives
        console.log('representatives', 
          JSON.stringify(
            this.representatives, null, 2)
          )
      })
    },
    data() {
      return {
        representatives: []
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

  .yourReps {
      grid-column: 1/2;
      padding: 1em;
            
  }
  #repCard {
    overflow: auto;
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