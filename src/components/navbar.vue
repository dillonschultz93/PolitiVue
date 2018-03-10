<template>
  <div id="navbar">
    <div class="nav-container">
      <div class="brand">
        <img src="../assets/logo.svg" class="brandmark">
        <h3 class="logotype">PolitiVue</h3>
      </div>    
      <div class="nav-items">
        <a v-show="showSignInNav" @click="showSignIn" href="#" class="sign-in">Sign In</a>
        <a v-show="showCreateNav" @click="showCreateUser" href="#" class="create-account">Create an Account</a>
        <a v-show="showLogoutNav" @click="closeLogout" href="#" class="create-account">Sign Out, {{ this.firstName }}</a>
      </div>
    </div>
    <div class="sign-in">
      <Login v-show="signInVisible" @close="closeSignInBtn" @closeX="closeSignIn" v-if="signInVisible"></Login>
    </div>
    <div class="create-user">
      <CreateUser v-show="createUserVisible" @close="closeCreateUser" @closeX="closeCreateUser" v-if="createUserVisible"></CreateUser>
    </div>
  </div> 
</template>

<script>
import Login from "./sign-in.vue";
import CreateUser from "./sign-up.vue";
import bus from "../eventBus.js";
import axios from "axios"


export default {
  name: "navbar",
  data() {
    return {
      signInVisible: false,
      createUserVisible: false,
      showSignInNav: true,
      showCreateNav: true,
      showLogoutNav: false,
      firstName: ""
    };
  },
  methods: {
    userExist: function(response, context) {
      if (
        response.status === 200 &&
        response.data !== "User Not Found" &&
        response.data !== "Password Incorrect"
      ) {
        context.inDatabase = true;
        var splitName = response.data.split(" ");
        this.firstName = splitName[0];
        bus.$emit("firstName", this.firstName);
        this.showLogout()
        context.close();
      } else {
        context.inDatabase = false;
      }
    },
    postSignIn: function(context) {
      axios
        .post("/api/signin", { email: context.email, psw: context.psw })
        .then(res => {
          this.userExist(res, context);
        });
    },
    postSignUp: function(context) {
      if (context.psw != context.psw2) return "Passwords Don't Match";
      if (
        !/[A-Z]/.test(context.psw) ||
        context.psw.length < 8 ||
        !/[a-z]/.test(context.psw) ||
        !/\d/.test(context.psw)
      )
        return "Password Must Contain at Least One Captial Letter, Lower Case Letter, a Number, and at least 8 characters long";
      axios.post("/api/signup", context._data).then(res => {
        this.postSignIn(context);
      });
    },

    showSignIn() {
      this.signInVisible = true;
    },
    closeSignIn() {
      this.signInVisible = false;
    },
    closeSignInBtn() {
      this.signInVisible = false;
      this.showSignInNav = false;
      this.showCreateNav = false;
      this.showLogoutNav = true;
    },
    showCreateUser() {
      this.createUserVisible = true;
    },
    closeCreateUser() {
      this.createUserVisible = false;
    },
    closeCreateUserBtn() {
      this.signInVisible = false;
      this.showSignInNav = false;
      this.showCreateNav = false;
      this.showLogoutNav = true;
    },
    showLogout() {
      this.showLogoutNav = true;
      this.showSignInNav = false;
      this.showCreateNav = false;
    },
    closeLogout() {
      this.showLogoutNav = false;
      this.showSignInNav = true;
      this.showCreateNav = true;
      this.firstName = "";
      bus.$emit("firstName", this.firstName);
    }
  },
  components: {
    Login: Login,
    CreateUser: CreateUser
  }
};
</script>

<style lang="scss">
@import "../scss/components/normalize";
@import "../scss/components/_typography";
@import "../scss/components/_colors";

#navbar {
  border-bottom: 2px solid $red-secondary;
  height: 58px;
  width: 100%;
}

.nav-container {
  align-items: center;
  display: flex;
  lost-center: 980px 0 flex;
  height: 58px;
  justify-content: space-between;
}

.brand {
  align-items: center;
  display: flex;
}

.brandmark {
  width: $heading-3-size;
  height: $heading-3-size;
  margin-right: 15px;
}

.logotype {
  color: $blue-primary;
  font-family: $heading-font;
  font-size: $heading-3-size;
  margin: 0;
}

.nav-items {
  display: flex;
  flex-direction: row;
}

.sign-in {
  font-family: $primary-font;
  font-size: $paragraph;
  color: $blue-primary;
  text-decoration: none;
  margin-right: 15px;
}

.sign-in::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: $red-secondary;
  transition: width 0.3s;
}

.sign-in:hover::after {
  width: 100%;
}

.create-account {
  font-family: $primary-font;
  font-size: $paragraph;
  color: $blue-primary;
  text-decoration: none;
  margin-right: 15px;
}

.create-account::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: $red-secondary;
  transition: width 0.3s;
}

.create-account:hover::after {
  width: 100%;
}
</style>