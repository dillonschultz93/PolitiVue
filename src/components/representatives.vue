<template>
      
      <div v-if="this.representatives" id="repCard"> 
        <h3 class="your-reps">{{ this.location }}</h3>
        <div class="card-container" v-if="representatives.length">
          <div v-for="(representative, repIndex) in representatives">
            <div class="card" v-for="(official, officialIndex) in representative.officials" @click="seeRep(repIndex, officialIndex)">
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
                <p class="official-party" v-if="official.party === 'Democratic'"><span v-bind:class="democrat">{{ official.party }}</span></p>
                <p class="official-party" v-else-if="official.party === 'Republican'"><span v-bind:class="republican">{{ official.party }}</span></p>
                <p class="official-party" v-else="official.party === 'Nonpartisan'"><span v-bind:class="independent">{{ official.party }}</span></p>
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
          JSON.stringify(
            this.representatives, null, 2)
          )
      }),
      bus.$on('location', (parsedAddress) => {
        this.location = `Your representatives in ${parsedAddress.location}`
      })
    },
    data() {
      return {
        representatives: [],
        location: '',
        noPortrait: '../assets/portrait.svg',
        democrat: 'democrat',
        republican: 'republican',
        independent: 'independent',
        demBorder: 'dem-border',
        repubBorder: 'repub-border',
        indepenBorder: 'indepen-border'
      }
    },
    methods: {
      photoConditional: function(string) {
        if(string){
          return string
        } else {
          return '../assets/portrait.svg'
        }
      },
      addressGen: function(obj) {
        if(obj.line2){
          return `${obj.line1}, ${obj.line2}, ${obj.city}, ${obj.state}, ${obj.zip}`
        } else {
          return `${obj.line1} ${obj.city}, ${obj.state}, ${obj.zip}`
        }
      },
      emailGen: function(array) {
        if(array){
          return array[0]
        }
      },
      websiteExist: function(array) {
        if(array) {
          return array[0]
        }
      },
      seeRep: function(repIndex, officialIndex) {
        const seletedOfficial = {
          photo: this.photoConditional(this.representatives[repIndex]
                     .officials[officialIndex]
                     .photoUrl),
          name: this.representatives[repIndex]
                    .officials[officialIndex]
                    .name,
          position: this.representatives[repIndex]
                        .position,
          party: this.representatives[repIndex]
                     .officials[officialIndex]
                     .party,
          address: this.addressGen(
            this.representatives[repIndex]
                .officials[officialIndex]
                .address[0]
          ),
          phone: this.representatives[repIndex]
                     .officials[officialIndex]
                     .phones[0],
          email: this.emailGen(
            this.representatives[repIndex]
                       .officials[officialIndex]
                       .emails
          ),
          website: this.websiteExist(
            this.representatives[repIndex]
                         .officials[officialIndex]
                         .urls
          ),
          social: this.representatives[repIndex]
                        .officials[officialIndex]
                        .channels
        }
        bus.$emit('seletedOfficial', seletedOfficial)
        bus.$emit('address', seletedOfficial)
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
  
  #repCard {
    margin-bottom: 30px;
  }
  
  .your-reps {
    color: $blue-primary;
    font-family: $heading-font;
    font-size: $heading-3-size;
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
    cursor: pointer;
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