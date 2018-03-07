<template>
<form v-on:submit.prevent="postSignIn" style="border:1px solid #ccc" id="sign-up">
  <div class="container">
    <h1>Login</h1>
    <p>Please fill in this form to login.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" v-model="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" v-model="psw" required>

    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

    <div class="clearfix">
      <button type="submit" class="signupbtn">Login</button>
    </div>
  </div>
</form>
</template>
 
<script>
import axios from "axios"
 
export default {
name: "sign-up",
data() {
    return{
      email: "",
      psw: ""
    }
  },
  methods: {
    postSignIn: function() {
      console.log(this._data);
      axios.post("/api/signin", this._data).then(res => console.log(res));
    }
  }
}
</script> 

<style>

</style>