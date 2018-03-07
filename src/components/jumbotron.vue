<template>
  <div id="jumbotron">
    <div class="jumbotron-container">
      <div class="text-container">
        <h1 class="tagline">Hello!</h1>
      </div>
      <Searchbar />
    </div>
  </div>
</template>

<script>

  import Searchbar from './search-bar.vue'
  
  export default {
    components: {
      'Searchbar': Searchbar
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
    height: 100vh;
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
    font-size: 7em;
    line-height: $primary-leading;
    margin-bottom: 10px;
    opacity: 0.75;
    text-align: center;
  }
  
  .subtagline {
    color: $blue-darkestShade;
    font-family: $heading-font;
    font-size: $heading-3-size;
    font-weight: $primary-weight;
    line-height: $primary-leading;
    margin-top: 10px;
    opacity: 0.75;
    text-align: center;
  }
  
</style>