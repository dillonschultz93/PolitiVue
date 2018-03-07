<template>
<form v-on:submit.prevent="postSignUp" style="border:1px solid #ccc" id="sign-up">
  <div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="first_name"><b>First Name</b></label>
    <input type="text" placeholder="First Name" v-model="first_name" required>

    <label for="last_name"><b>Last Name</b></label>
    <input type="text" placeholder="Last Name" v-model="last_name" required>

    <label for="zip_code"><b>Zip Code</b></label>
    <input type="text" placeholder="Zip Code" v-model="zip_code" required>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" v-model="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" v-model="psw" required>

    <label for="psw2"><b>Re-Type Password</b></label>
    <input type="password" placeholder="Enter Password" v-model="psw2" required>

    <label for="party"><b>Party Affiliation</b></label>
    <select v-model="party">
      <option value="">Perfer Not to Say</option>
      <option>Republican</option>
      <option>Democrat</option>
    </select>

    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

    <div class="clearfix">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
  </div>
</form>
</template>
 
<script>
import axios from "axios";

export default {
  name: "sign-up",
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      psw: "",
      psw2: "",
      party: "",
      zip_code: ""
    };
  },
  methods: {
    postSignUp: function() {
      console.log(this._data);
      if (this.psw != this.psw2) return "Passwords Don't Match";
      if (!/[A-Z]/.test(this.psw) || this.psw.length < 8 || !/[a-z]/.test(this.psw) || !/\d/.test(this.psw)) return "Password Must Contain at Least One Captial Letter, Lower Case Letter, a Number, and at least 8 characters long"
      axios.post("/api/signup", this._data).then(res => console.log(res));
    }
  }
};
</script> 

<style>
* {
  box-sizing: border-box;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity: 1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn,
.signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn,
  .signupbtn {
    width: 100%;
  }
}
</style>