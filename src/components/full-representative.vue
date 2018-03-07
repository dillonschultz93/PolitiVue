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
        <div class="phone">
          <p v-if="this.seletedOfficial.phone">{{ this.seletedOfficial.phone }}</p>
        </div>
        <div class="website">
          <a v-if="this.seletedOfficial.website" :href="this.seletedOfficial.website">
            {{ this.seletedOfficial.website }}
          </a>
        </div>
        <div v-for="item in this.seletedOfficial.social" class="social">
          <a v-if="item.type === 'GooglePlus'" :href="`https://plus.google.com/${item.id}`">
            <img src="../assets/google-plus-logo.svg" class="social-icon">
          </a>
          <a v-if="item.type === 'Facebook'" :href="`https://facebook.com/${item.id}`">
            <img src="../assets/facebook-logo.svg" class="social-icon">
          </a>
          <a v-if="item.type === 'Twitter'" :href="`https://twitter.com/${item.id}`">
            <img src="../assets/twitter-logo.svg" class="social-icon">
          </a>
          <a v-if="item.type === 'YouTube'" :href="`https://youtube.com/${item.id}`">
            <img src="../assets/yt-logo.svg" class="social-icon">
          </a>
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
      seletedOfficial: {},
      url: '',
      logoAssets: ''
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
  
  .social-icon {
    width: 32px;
  }
  
</style>
