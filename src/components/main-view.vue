<template>
  <div id="mainVeiw">
    <div class="yourReps">
      <Reps />
    </div>
    <div class="repView">
      <FullRep />
    </div>
  </div>
</template>
<script>

  import Reps from "./representatives.vue"
  import FullRep from './full-representative.vue'
  
  export default {
    name: 'mainVeiw', 
    components: {
      Reps, 
      FullRep
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
  
  #mainVeiw {
    lost-center: 980px 0 flex;
    height: 100vh;
  }
  
  .yourReps {
    lost-column: 1/2 0 flex;
  }
  
  .repView {
    lost-column: 1/2 0 flex;
  }
  
</style>