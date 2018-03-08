<template>
  <div id="footer">
    <div class="footer-container">
      <p class="footer-text">Made with Vue.js &amp; &hearts; &copy; 2018</p>
      <img src="../assets/logo.svg" class="brandmark">
    </div>
  </div>
</template>

<script>

export default {
    name: 'footer',

}

</script>

<style lang="scss" scoped>
  @import "../scss/components/normalize";
  @import "../scss/components/_typography";
  @import "../scss/components/_colors";

  .footer-container {
    align-items: center;
    border-top: 2px solid $red-secondary;
    display: flex;
    height: 30px;
    justify-content: center;
    width: 100%;
  }
  
  .footer-text {
    color: $blue-primary;
    font-family: $primary-font;
    font-size: $leagal-paragraph;
    margin: 0 15px 0 15px
  }
  
  .brandmark {
    width: $leagal-paragraph;
    height: $leagal-paragraph;
  }

</style>
