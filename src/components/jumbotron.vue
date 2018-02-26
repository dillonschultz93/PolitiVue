<template>
  <div id="jumbotron">
    <div class="jumbotron-container">
      <div class="text-container">
        <h1 class="tagline">Some Text About <br>How Great This App Is</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'jumbotron'
  }
</script>

<style lang="scss">

  @import "../scss/components/normalize";
  @import "../scss/components/_typography";
  @import "../scss/components/_colors";
  
  body {
    margin: 0;
  }
  
  .jumbotron-container {
    align-items: center;
    background-color: #e3e6e6;
    display: flex;
    justify-content: center;
    height: 50vh;
    margin: 0;
    width: 100%;
  }
  
  .text-container {
    display: flex;
    justify-content: center;
    lost-center: 980px 0 flex;
    
  }
  
  .tagline {
    font-family: $heading-font;
    font-size: $heading-1-size;
    line-height: $primary-leading;
    text-align: center;
  }
  
</style>