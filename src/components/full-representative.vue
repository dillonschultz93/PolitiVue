<template>
  
</template>

<script>

import bus from '../eventBus.js'

export default {
  name:'fullRep',
  data() {
    return {
      
    }
  },
  methods: {
      getParty: rep => rep.party === "Republican" ? "republican" : rep.party === "Democrat" ? "democrat" : "independent"
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
