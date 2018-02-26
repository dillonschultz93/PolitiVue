<template>
  <div id="navbar">
    <div class="nav-container">
      <div class="brand">
        <img src="../assets/logo.svg" class="brandmark">
        <h3 class="logotype">PolitiVue</h3>
      </div>
      
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
    border-bottom: 2px solid $red-secondary;
    height: 58px;
    width: 100%;
  }
  
  .nav-container {
    align-items: center;
    display: flex;
    lost-center: 980px 0 flex;
    height: 58px;
    justify-content: space-between;
  }
  
  .brand {
    align-items: center;
    display: flex;
  }
  
  .brandmark {
    width: $heading-3-size;
    height: $heading-3-size;
    margin-right: 15px;
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
    background: $red-secondary;
    transition: width .3s;
  }

  .sign-in:hover::after {
    width: 100%;
  }
  
</style>