<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <div class="areaOne">
      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="areaTwo">
      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'This is a test'
    }
  }
}
</script>

<style lang="scss">
  #app {
    lost-center: 980px;
    lost-utility: clearfix;
  }
  .areaOne {
    lost-column: 1/2;
  }
  .areaTwo {
    lost-column: 1/2;
  }
  .paragraph {
    font-family: 'Helvetica', sans-serif;
  }
</style>
