<template>
    <div v-if="this.seletedOfficial" id="fullRep">
      <transition name="fadeInRight">
      <div v-if="show" class="official">
        <div class="identity">
          <div class="image-container">
            <img v-if="this.seletedOfficial.photo" :src="this.seletedOfficial.photo" class="portrait">
          </div>
          <div class="title">
            <p v-if="this.seletedOfficial.name && this.seletedOfficial.position">
              <span class="name">{{ this.seletedOfficial.name }}</span>
              <hr>
              <span class="positiion">{{ this.seletedOfficial.position }}</span>
            </p>
            <p v-if="this.seletedOfficial.party === 'Democratic'" class="dem"> {{ this.seletedOfficial.party }}</p>
            <p v-if="this.seletedOfficial.party === 'Republican'" class="repub"> {{ this.seletedOfficial.party }}</p>
            <p v-if="this.seletedOfficial.party === 'Nonpartisan'" class="independent"> {{ this.seletedOfficial.party }}</p>
          </div>
        </div>
        <div class="contact">
          <div class="phone">
            <img v-if="this.seletedOfficial.phone" src="../assets/phone.svg" class="contact-icon">
            <p v-if="this.seletedOfficial.phone">
              {{ this.seletedOfficial.phone }}
            </p>
          </div>
          <div class="website">
            <img v-if="this.seletedOfficial.website" src="../assets/globe.svg" class="contact-icon">
            <a v-if="this.seletedOfficial.website" :href="this.seletedOfficial.website">
              Website
            </a>
          </div>
          <div class="email">
            <img v-if="this.seletedOfficial.email" src="../assets/email.svg" class="contact-icon">
            <a v-if="this.seletedOfficial.email" :href="`mailto:${this.seletedOfficial.email}`">
              Email
            </a>
          </div>  
        </div>
        <div class="social-media-accounts">
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
        <div class="location">
          <div class="address">
            <p v-if="this.seletedOfficial.address">
              {{ this.seletedOfficial.address }}
            </p>
          </div>
          <div class="map">
            <google-map v-if="this.seletedOfficial.address"></google-map>
          </div>
        </div>
      </div>
    </transition>
    </div>
</template>

<script>

import bus from '../eventBus.js';
import googleMap from "./googleMap.vue"

export default {
  name:'fullRep',
  components:{
    googleMap
  },
  data() {
    return {
      seletedOfficial: {},
      url: '',
      logoAssets: '',
      show: true,
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
  
  .official {
    display: flex;
    flex-wrap: wrap;
    lost-column: 1/1;
    padding-left: 20px;
    margin-top: 180px;
  }
  
  .identity {
    align-items: center;
    justify-content: center;
    lost-column: 1/1 flex;
    lost-flex-container: row;
    width: 100%;
  }
  
  .portrait {
    border-radius: 100%;
    height: 150px;
    object-fit: cover;
    width: 150px;
  }
  
  .image-container {
    margin-right: 10px;
  }
  
  .name {
    color: $blue-primary;
    display: flex;
    flex-direction: row;
    font-family: $primary-font;
    font-size: $heading-4-size;
    font-weight: $heavy-weight;
  }
  
  .positiion {
    color: $blue-lightShade;
    font-family: $primary-font;
    font-size: $paragraph;
    font-weight: $light-weight;;
  }
  
  .contact {
    align-items: center;
    display: flex;
    flex-direction: row;
    lost-column: 1/1;
    justify-content: center;
    margin-top: 30px;
    
    p {
      color: $blue-primary;
      font-family: $primary-font;
      font-size: $paragraph;
      margin-right: 10px;
    }
  }
  
  .phone {
    align-items: center;
    display: flex;   
    p {
      color: $blue-primary;
      font-family: $primary-font;
      font-size: $paragraph;
      margin-right: 10px;
      margin-bottom: 0;
      margin-top: 0;
    }
  }
  
  .website {
    align-items: center;
    display: flex;
    flex-direction: row;
    
    a {
      color: $blue-primary;
      font-family: $primary-font;
      font-size: $paragraph;
      text-decoration: none;
      margin-right: 10px;
    }
  }
  
  .email {
    align-items: center;
    display: flex;
    flex-direction: row;
    
    a {
      color: $blue-primary;
      font-family: $primary-font;
      font-size: $paragraph;
      text-decoration: none;
      margin-right: 10px;
    }
  }
  
  .social-media-accounts {
    align-items: center;
    display: flex;
    flex-direction: row;
    lost-column: 1/1;
    justify-content: center;
    margin-top: 30px;
    
    p {
      color: $blue-primary;
      font-family: $primary-font;
      font-size: $paragraph;
      margin-right: 10px;
    }
  }

  .social-icon {
    margin-left: 7px;
    margin-right: 7px;
    width: $heading-4-size;
  }
  
  .contact-icon {
    margin-right: 5px;
    width: $paragraph;
  }
  
  .location {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    lost-column: 1/1;
  }
  
  .address {
    align-items: center;
    display: flex;
    flex-direction: row;
    lost-column: 1/2;
    justify-content: center;
    padding: 15px;
    
    p {
      color: $blue-primary;
      font-family: $primary-font;
      font-size: $paragraph;
    }
  }
  
  .map {
    lost-column: 1/2;
  }
  
  // condition styles
  .dem {
    color: $blue-primary;
    font-family: $primary-font;
    font-size: $paragraph;
    font-weight: $light-weight;
  }
  
  .repub {
    color: $red-secondary;
    font-family: $primary-font;
    font-size: $paragraph;
    font-weight: $light-weight;
  }
  
  .independent {
    color: $gray;
    font-family: $primary-font;
    font-size: $paragraph;
    font-weight: $light-weight;
  }
  
  //animation
  
  @keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}
  
</style>
