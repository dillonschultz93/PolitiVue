<template>
  <div id="navbar">
    <div class="nav-container">
      <h3 class="logotype">PolitiVue</h3>
      <div class="nav-items">
        <a href="#" class="sign-in">Sign In or Create an Account</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>

<style lang="scss">
  @import "../scss/components/normalize";
  @import "../scss/components/_typography";
  @import "../scss/components/_colors";

  #navbar {
    border-bottom: 2px solid $gray;
    height: 58px;
    position: fixed;
    width: 100%;
  }
  
  .nav-container {
    align-items: center;
    display: flex;
    // lost-align: vertical;
    lost-center: 980px 0 flex;
    height: 58px;
    justify-content: space-between;
  }
  
  .logotype {
    color: $blue-primary;
    font-family: $heading-font;
    font-size: $heading-3-size;
    margin: 0;
  }
  
  .sign-in {
    font-family: $primary-font;
    font-size: $paragraph;
    color: $blue-primary;
    text-decoration: none;
  }
  
  .sign-in::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: $blue-primary;
    transition: width .3s;
  }

  .sign-in:hover::after {
    width: 100%;
  }
  
</style>