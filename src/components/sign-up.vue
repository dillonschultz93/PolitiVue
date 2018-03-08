<template>
<transition name="modal-fade">
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header" id="modalTitle">
        <p class="header">
          Create an Account
        </p>
        <button type="button" class="btn-close" @click="this.closeWithX">
          x
        </button>
      </header>
      <section class="modal-body" id="modalDescription">
        <div class="body">
          <form class="signup-form">
            <div class="full-name">
              <input v-model="first_name" type="text" id="fname" placeholder="First Name" required>
              <input v-model="last_name" type="text" id="lname" placeholder="Last Name" required>
            </div>
            <div class="zip-and-email">
              <input v-model="zip_code" type="text" id="zipcode" placeholder="Zip Code" required>
              <input v-model="email" type="text" id="email-input" placeholder="Email" required>
            </div> 
            <div class="password">
              <input v-model="psw" type="password" id="password-input" placeholder="Password" required>
              <input v-model="psw2" type="password" id="password-confirm" placeholder="Re-Enter Password" required>
            </div>
            <button @click="postSignUp" type="button" id="sign-up">Create Account</button>
            <button @click="this.closeWithX" type="button" id="cancel">Cancel</button>
          </form>
        </div>
      </section>
    </div>
  </div>
</transition>
</template>
 
<script>
import axios from "axios";
import bus from '../eventBus.js'

export default {
  name: "sign-up",
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      psw: "",
      psw2: "",
      zip_code: ""
    };
  },
  methods: {
    close() {
      this.$emit('close')
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
      axios.post("/api/signin", {email:this.email, psw:this.psw})
           .then((res) => {
             console.log('response', res)
             this.userExist(res)
             console.log('Logged in', this.inDatabase)
           })
    },
    postSignUp: function() {
      console.log(this._data);
      if (this.psw != this.psw2) return "Passwords Don't Match";
      if (!/[A-Z]/.test(this.psw) || this.psw.length < 8 || !/[a-z]/.test(this.psw) || !/\d/.test(this.psw)) return "Password Must Contain at Least One Captial Letter, Lower Case Letter, a Number, and at least 8 characters long"
      axios.post("/api/signup", this._data)
           .then((res) => {
             this.postSignIn()
           });
      
    }
  }
};
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
    display: flex;
    flex-direction: column;
    width: 600px;
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
  
  .signup-form {
    lost-column: 1/1;
  }
  
  .full-name {
    lost-flex-container: row;
  }
  
  #fname {
    lost-column: 1/2 flex;
    box-sizing: border-box;
    width: 100%;
    border: 2px solid $blue-lightShade;
    border-radius: 25px;
    padding: 8px;
    font-family: $primary-font;
    font-size: $small-paragraph;
    color: $blue-darkShade;
    text-align: center;
    outline: none;
  }
  
  #fname:focus {
    border: 2px solid $blue-darkestShade;
    transition: border 0.3s;
  }
  
  #lname {
    lost-column: 1/2 flex;
    box-sizing: border-box;
    width: 100%;
    border: 2px solid $blue-lightShade;
    border-radius: 25px;
    padding: 8px;
    font-family: $primary-font;
    font-size: $small-paragraph;
    color: $blue-darkShade;
    text-align: center;
    outline: none;
  }
  
  #lname:focus {
    border: 2px solid $blue-darkestShade;
    transition: border 0.3s;
  }
  
  .zip-and-email {
    lost-flex-container: row;
  }
  
  #zipcode {
    lost-column: 1/2 flex;
    box-sizing: border-box;
    width: 100%;
    border: 2px solid $blue-lightShade;
    border-radius: 25px;
    padding: 8px;
    font-family: $primary-font;
    font-size: $small-paragraph;
    color: $blue-darkShade;
    text-align: center;
    outline: none;
    margin-top: 8px;
  }
  
  #zipcode:focus {
    border: 2px solid $blue-darkestShade;
    transition: border 0.3s;
  }
  
  #email-input {
    lost-column: 1/2 flex;
    box-sizing: border-box;
    width: 100%;
    border: 2px solid $blue-lightShade;
    border-radius: 25px;
    padding: 8px;
    font-family: $primary-font;
    font-size: $small-paragraph;
    color: $blue-darkShade;
    text-align: center;
    outline: none;
    margin-top: 8px;
  }
  
  #email-input:focus {
    border: 2px solid $blue-darkestShade;
    transition: border 0.3s;
  }
  
  .password {
    lost-flex-container: row;
  }
  
  #password-input {
    lost-column: 1/2 flex;
    box-sizing: border-box;
    width: 100%;
    border: 2px solid $blue-lightShade;
    border-radius: 25px;
    padding: 8px;
    font-family: $primary-font;
    font-size: $small-paragraph;
    color: $blue-darkShade;
    text-align: center;
    outline: none;
    margin-top: 8px;
  }
  
  #password-input:focus {
    border: 2px solid $blue-darkestShade;
    transition: border 0.3s;
  }
    
  #password-confirm {
    lost-column: 1/2 flex;
    box-sizing: border-box;
    width: 100%;
    border: 2px solid $blue-lightShade;
    border-radius: 25px;
    padding: 8px;
    font-family: $primary-font;
    font-size: $small-paragraph;
    color: $blue-darkShade;
    text-align: center;
    outline: none;
    margin-top: 8px;
  }
  
  #password-confirm:focus {
    border: 2px solid $blue-darkestShade;
    transition: border 0.3s;
  }
  
  #sign-up {
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
    margin-top: 25px;
  }
  
  #sign-up:hover {
    background-color: $blue-primary;
    color: $white;
    transition: background-color 0.3s;
  }
  
  #cancel {
    box-sizing: border-box;
    color: $red-secondary;
    background-color: transparent;
    lost-column: 1/1 flex;
    border: 1px solid $red-secondary;
    border-radius: 25px;
    padding: 2px;
    font-family: $primary-font;
    font-size: $small-paragraph;
    outline: none;
    margin-top: 8px;
  }
  
  #cancel:hover {
    background-color: $red-secondary;
    color: $white;
    transition: background-color 0.3s;
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