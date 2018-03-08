<template>
  <div id="jumbotron">
    <div class="jumbotron-container">
      <div class="text-container">
        <h1 v-if="!this.firstName" class="tagline">Hello!</h1>
        <h1 v-if="this.firstName" class="tagline">Hello, {{ this.firstName }}!</h1>
      </div>
      <Searchbar />
    </div>
  </div> 
</template>

<script>

  import Searchbar from './search-bar.vue'
  import bus from '../eventBus.js'
  
  export default {
    components: {
      'Searchbar': Searchbar
    },
    data() {
      return {
        firstName: ''
      }
    },
    methods: {
      
    },
    mounted() {
      bus.$on('firstName', (firstName) => {
        this.firstName = firstName
      })
    },
    name: 'jumbotron'
  }
</script>

<style lang="scss" scoped>

  @import "../scss/components/normalize";
  @import "../scss/components/_typography";
  @import "../scss/components/_colors";
  
  body {
    margin: 0;
  }
  
  .jumbotron-container {
    align-items: center;
    background-image: url('../assets/jumbo-bg.jpg');
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 92.9vh;
    margin: 0;
    width: 100%;
  }
  
  .text-container {
    display: flex;
    justify-content: center;
    lost-center: 980px 0 flex;
    // lost-column: 1/1;
    
  }
  
  .tagline {
    color: $red-darkShade;
    font-family: $heading-font;
    font-size: 5em;
    line-height: $primary-leading;
    margin-bottom: 10px;
    text-align: center;
  }
  
</style>