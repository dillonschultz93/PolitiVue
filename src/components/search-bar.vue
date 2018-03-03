<template>
  <div id="search-bar">
    <div class="input-container">
      <input id="zip-code" v-model="address" :placeholder="placeHolder">
      <button v-on:click="getReps" id="search-zip" type="button">Find Your Representatives</button>
    </div> 
  </div>
</template>

<script>

  import axios from 'axios';
  
  export default {
    name: 'search-bar',
    data(){
      return {
        placeHolder: "Enter Your Zip",
        address: '',
        offices: [],
        officials: []
      }
    },
    methods: {
      getReps: function() {
        const context = this
        axios.get(`home/${this.address}`)
             .then(response => {
               this.offices = response.data.offices
               this.officials = response.data.officials
               console.log('Offices', JSON.stringify(this.offices, null, 2))
               console.log('Officials', JSON.stringify(this.officials, null, 2))
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
    // background-color: $black;
    // padding: 20px;
  }
  
  #zip-code {
    background-color: rgba(255,255,255, 0.75);
    border: 2px solid $white;
    border-radius: 10px;
    color: $blue-darkestShade;
    font-family: $primary-font;
    font-size: $paragraph;
    outline: none;
    padding: 8px;
    text-align: center;
    transition: 0.5s;
    width: 160px;
  }
  
  #zip-code:focus {
    border: 2px solid $blue-darkestShade;
  }
  
  #search-zip {
    background-color: $blue-darkestShade;
    border: none;
    border-radius: 10px;
    color: $white;
    font-family: $primary-font;
    font-size: $paragraph;
    outline: none;
    padding: 8px;
    text-align: center;
    transition: 0.5s;
    width: 220px;
  }
  
</style>

