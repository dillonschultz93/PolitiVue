<template>
      
      <div id="repCard">
        <h3 class="your-reps">Your Representatives</h3>
        <div class="card-container" v-if="representatives.length">
          <div v-for="representative in representatives">
            <div class="card" v-for="official in representative.officials">
              <div class="image-container" v-if="official.photoUrl && official.party === 'Democratic'">
                <img :src="official.photoUrl" class="portrait dem-border">
              </div>
              <div class="image-container" v-else-if="official.photoUrl && official.party === 'Republican'">
                <img :src="official.photoUrl" class="portrait repub-border">
              </div>
              <div class="image-container" v-else-if="official.photoUrl && official.party === 'Nonpartisan'">
                <img :src="official.photoUrl" class="portrait indepen-border">
              </div>
              <div class="image-container" v-else-if="!official.photoUrl && official.party === 'Democratic'">
                <img src="../assets/portrait.svg" class="portrait dem-border">
              </div>
              <div class="image-container" v-else-if="!official.photoUrl && official.party === 'Republican'">
                <img src="../assets/portrait.svg" class="portrait repub-border">
              </div>
              <div class="image-container" v-else-if="!official.photoUrl && official.party === 'Nonpartisan'">
                <img src="../assets/portrait.svg" class="portrait indepen-border">
              </div>
              <div class="official-info">
                <p class="official-name"><span class="bold">{{ official.name }}</span> <br> <span class="light">{{ representative.position }}</span></p>
                <p class="official-party" v-if="official.party === 'Democratic'">Party: <span v-bind:class="democrat">{{ official.party }}</span></p>
                <p class="official-party" v-else-if="official.party === 'Republican'">Party: <span v-bind:class="republican">{{ official.party }}</span></p>
                <p class="official-party" v-else="official.party === 'Nonpartisan'">Party: <span v-bind:class="independent">{{ official.party }}</span></p>
              </div>
            </div>
          </div>
        </div>
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
        representatives: [],
        noPortrait: '../assets/portrait.svg',
        democrat: 'democrat',
        republican: 'republican',
        independent: 'independent',
        demBorder: 'dem-border',
        repubBorder: 'repub-border',
        indepenBorder: 'indepen-border'
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
  
  .your-reps {
    color: $blue-primary;
    font-family: $heading-font;
    font-size: $heading-2-size;
  }
  
  .card-container {
    background-color: $light-gray;
    border-radius: 15px;
    height: 75vh;
    lost-utility: clearfix;
    overflow: scroll;
    padding: 20px;
  }
  
  .card {
    align-items: center;
    display: flex;
    height: 125px;
    margin: 30px 0px 30px 0px;
    padding: 10px;
  }
  
  .card:hover {
    background-color: #cccccc;
    border-radius: 10px;
    transition: background-color .6s;
  }
  
  .image-container {
    lost-column: 1/3;
  }
  
  .portrait {
    border-radius: 100%;
    height: 100px;
    object-fit: cover;
    width: 100px;
    
  }
  
  .official-info {
    lost-column: 2/3;
  }
  
  .official-name {
    color: $blue-primary;
    font-family: $primary-font;
    margin: 0px;
  }
  
  .official-party {
    font-family: $primary-font;
    font-weight: $light-weight;
    margin: 0;
  }
  
  //dynamically bound styles
  
  .bold {
    font-weight: $heavy-weight;
  }
  
  .light {
    font-weight: $light-weight;
  }
  
  .democrat {
    color: $blue-primary;
  }
  
  .republican {
    color: $red-secondary;
  }
  
  .independent {
    color: $dark-gray;
  }
  
  .dem-border {
    border: 5px solid $blue-lightShade;
  }
  
  .repub-border {
    border: 5px solid $red-lightShade;
  }
  
  .indepen-border {
    border: 5px solid $gray; 
  }
  
</style>