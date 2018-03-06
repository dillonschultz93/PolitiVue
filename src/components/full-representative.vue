<template>
  
  <div id="fullRep">
    <p>{{ this.seletedOfficial.name }}</p>
  </div>
  
</template>

<script>

import bus from '../eventBus.js'

export default {
  name:'fullRep',
  data() {
    return {
      seletedOfficial: {}
    }
  },
  mounted() {
    bus.$on('seletedOfficial', (seletedOfficial) => {
      this.seletedOfficial = seletedOfficial
      console.log('seleted official', JSON.stringify(this.seletedOfficial, null, 2))
    })
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
  
</style>
