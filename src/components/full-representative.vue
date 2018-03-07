<template>
  
  <div id="fullRep">
    <div class="official">
      <div class="official-identity">
        <div class="image-container">
          <img v-if="this.seletedOfficial.photo" :src="this.seletedOfficial.photo" class="portrait">
        </div>
        <div class="official-title">
          <p v-if="this.seletedOfficial.name && this.seletedOfficial.position" class="official">
            <span class="official-name">{{ this.seletedOfficial.name }}</span>
            <br> 
            <span class="official-positiion">{{ this.seletedOfficial.position }}</span>
          </p>
          <p v-if="this.seletedOfficial.party" class="party"> Party: {{ this.seletedOfficial.party }}</p>
        </div>
      </div>
      <div class="contact">
        <div class="address">
          <p v-if="this.seletedOfficial.address">{{ this.seletedOfficial.address }}</p>
        </div>
      </div>
    </div>
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
  
  .portrait {
    border-radius: 100%;
    height: 175px;
    object-fit: cover;
    width: 175px;
  }
  
</style>
