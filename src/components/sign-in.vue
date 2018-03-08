<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header" id="modalTitle">
          <p class="header">
            Sign In to Your Account
          </p>
          <button type="button" class="btn-close" @click="this.closeWithX">
            x
          </button>
        </header>
        <section class="modal-body" id="modalDescription">
          <div class="body">
            <form class="signin-form">
              <div class="username">
                <input v-model="email" type="text" id="email" placeholder="Email">
              </div>
              <div class="password">
                <input v-model="psw" type="password" id="password" placeholder="Password">
              </div>
              <button @click="postSignIn" type="button" id="login">Sign In</button>
            </form>
          </div>  
          <p v-if="this.inDatabase === false" class="error-msg">{{ this.noUser }}</p>
        </section>
      </div>
    </div>
  </transition>
</template>
 
<script>

import axios from "axios"
import bus from '../eventBus.js'
 
export default {
  name: 'sign-in',
  data() {
    return {
      email: "",
      psw: "",
      inDatabase: null,
      noUser: 'Username and/or password does not match',
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    closeWithX() {
      this.$emit('closeX')
    },
    userExist: function(response) {
      if(response.status === 200 && response.data !== 'User Not Found' && response.data !== 'Password Incorrect') {
        this.inDatabase = true
        const splitName = response.data.split(' ')
        this.firstName = splitName[0]
        bus.$emit('firstName', this.firstName)
        console.log('name to be passed', this.firstName)
        this.close()
        
      } else {
        this.inDatabase = false
      }
    },
    postSignIn: function() {
      console.log(this._data);
      axios.post("/api/signin", this._data)
           .then((res) => {
             console.log('response', res)
             this.userExist(res)
             console.log('Logged in', this.inDatabase)
           })
    }
  }
}
</script> 

<style lang="scss" scoped>

  @import "../scss/components/normalize";
  @import "../scss/components/_typography";
  @import "../scss/components/_colors";
  
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    border-radius: 10px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    z-index: 999;
  }

  .modal-header {
    padding: 15px;
    display: flex;
    justify-content: space-between;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    
    p {
      color: $red-secondary;
      font-family: $heading-font;
      font-size: $heading-3-size;
      font-weight: $heavy-weight;
      text-align: center;
      margin-right: 50px;
    }
  }
  
  .signin-form {
    lost-flex-container: row;
  }
  
  .username {
    flex-direction: row;
    flex-wrap: wrap;
    lost-column: 1/2 flex;
    margin-bottom: 20px;
  }
  
  #email {
    box-sizing: border-box;
    width: 100%;
    border: 2px solid $blue-lightShade;
    border-radius: 25px;
    padding: 12px;
    font-family: $primary-font;
    font-size: $small-paragraph;
    color: $blue-darkShade;
    text-align: center;
    outline: none;
  }
  
  #email:focus {
    border: 2px solid $blue-darkestShade;
    transition: border 0.3s;
  }
  
  .password {
    flex-direction: row;
    flex-wrap: wrap;
    lost-column: 1/2 flex;
    margin-bottom: 20px;
  }
  
  #password {
    box-sizing: border-box;
    width: 100%;
    border: 2px solid $blue-lightShade;
    border-radius: 25px;
    padding: 12px;
    font-family: $primary-font;
    font-size: $small-paragraph;
    color: $blue-darkShade;
    text-align: center;
    outline: none;
  }
  
  #password:focus {
    border: 2px solid $blue-darkestShade;
    transition: border 0.3s;
  }
    
  #login {
    box-sizing: border-box;
    color: $blue-primary;
    background-color: transparent;
    lost-column: 1/1 flex;
    border: 1px solid $blue-primary;
    border-radius: 25px;
    padding: 2px;
    font-family: $primary-font;
    font-size: $small-paragraph;
    outline: none;
  }
  
  #login:hover {
    background-color: $blue-primary;
    color: $white;
    transition: background-color 0.3s;
  }
  
  .error-msg {
    color: $red-secondary;
    font-family: $primary-font;
    font-size: 0.75em;
    text-align: center;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: 2px solid $red-secondary;
    border-radius: 100%;
    font-size: $paragraph;
    cursor: pointer;
    color: $red-secondary;
    width: 32px;
    height: 32px;
    background: $white;
    outline: none;
  }
  
  .btn-close:hover {
    background-color: $red-secondary;
    color: $white;
    transition: background-color 0.5s;
  }
  
  //animation
  
  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .3s ease
  }
  
</style>