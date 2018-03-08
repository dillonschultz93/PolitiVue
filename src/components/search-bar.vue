<template>
  <div id="search-bar">
    <div class="input-container">
      <input id="zip-code" v-on:keyup.enter="getReps" v-model="address" :placeholder='placeholder'>
      <button v-on:click="getReps" id="search-zip" type="button">
        <img src="../assets/search.svg" class="search-icon">
      </button>
    </div> 
  </div>
</template>

<script>

  import axios from 'axios'
  import bus from '../eventBus.js'
  
  export default {
    name: 'search-bar',
    data(){
      return {
        address: '',
        placeholder: 'Enter Your Zip Code To Find Your State Representatives'
      }
    },
    methods: {
      getReps: function() {
        axios.get(`api/${this.address}`)
             .then(response => {
               //setting variables to the different arrays
               const offices = response.data.offices
               const officials = response.data.officials
               //map through the offices array
               const representatives = offices.map((office) => {
                 return {
                   position: office.name,
                   officials: office.officialIndices.map((index) => {
                     return officials[index]
                   })
                 }
               })
               bus.$emit('representatives', representatives)
               const parsedAddress = {
                 location: `${response.data.normalizedInput.city}, ${response.data.normalizedInput.state}`
               }
               bus.$emit('location', parsedAddress)
             })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/components/normalize";
  @import "../scss/components/_typography";
  @import "../scss/components/_colors";
  
  .input-container {
    display: flex;
  }
  
  #zip-code {
    background-color: rgba(255,255,255, 0.75);
    border: 2px solid $white;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    color: $blue-darkShade;
    font-family: $primary-font;
    font-size: $heading-4-size;
    outline: none;
    padding: 25px;
    text-align: center;
    transition: 0.5s;
    width: 550px;
  }
  
  #zip-code:focus {
    border: 2px solid $blue-darkShade;
  }
  
  #search-zip {
    align-items: center;
    background-color: $blue-darkShade;
    border: 2px solid $blue-darkShade;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    color: $white;
    display: flex;
    font-family: $primary-font;
    font-size: $paragraph;
    justify-content: center;
    outline: none;
    padding: 8px;
    text-align: center;
    transition: 0.5s;
    width: 100px;
  }
  
  #search-zip:active {
    background-color: #0a2c56;
  }
  
  .search-icon {
    width: 32px;
    height: 32px;
  }
  
</style>

