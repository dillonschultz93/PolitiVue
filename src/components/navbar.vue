<template>
  <div id="navbar">
    <div class="nav-container">
      <div class="brand">
        <img src="../assets/logo.svg" class="brandmark">
        <h3 class="logotype">PolitiVue</h3>
      </div>
      
      <div class="nav-items">
        <a href="#sign-up-modal" class="sign-in">Sign In</a>
        <a href="#login-modal" class="create-account">Create an Account</a>
      </div>
    </div>

  <div id="sign-up-modal" class="modalDialog">
    
    	<div>
        <a href="#close" title="Close" class="close">X</a>


        <Login />
      </div>
  </div>  


  <div id="login-modal" class="modalDialog">
    
    	<div>
        <a href="#close" title="Close" class="close">X</a>

        
        <SignUp />
      </div>
  </div>  


  </div>
</template>

<script>
  import SignUp from './sign-up.vue'
  import Login from './login.vue'
  export default {
    name: 'navbar',
    components: {
      SignUp,
      Login
    }
  }
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
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: $red-secondary;
    transition: width .3s;
  }

  .sign-in:hover::after {
    width: 100%;
  }
  
  .create-account {
    font-family: $primary-font;
    font-size: $paragraph;
    color: $blue-primary;
    text-decoration: none;
  }
  
  .create-account::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: $red-secondary;
    transition: width .3s;
  }

  .create-account:hover::after {
    width: 100%;
  }

  .modalDialog {
	position: fixed;
	font-family: Arial, Helvetica, sans-serif;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0,0,0,0.8);
	z-index: 99999;
	opacity:0;
	-webkit-transition: opacity 400ms ease-in;
	-moz-transition: opacity 400ms ease-in;
	transition: opacity 400ms ease-in;
	pointer-events: none;
}

.modalDialog:target {
	opacity:1;
	pointer-events: auto;
}

.modalDialog > div {
	width: 700px;
	position: relative;
	margin: 10% auto;
	padding: 5px 20px 13px 20px;
	border-radius: 10px;
	background: #fff;
	background: -moz-linear-gradient(#fff, #999);
	background: -webkit-linear-gradient(#fff, #999);
	background: -o-linear-gradient(#fff, #999);
}

.close {
	background: #606061;
	color: #FFFFFF;
	line-height: 25px;
	position: absolute;
	right: -12px;
	text-align: center;
	top: -10px;
	width: 24px;
	text-decoration: none;
	font-weight: bold;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	-moz-box-shadow: 1px 1px 3px #000;
	-webkit-box-shadow: 1px 1px 3px #000;
	box-shadow: 1px 1px 3px #000;
}

.close:hover { background: #00d9ff; }
  
  @media screen and (max-width: 400px) {
    
    .nav-container {
      padding-left: 20px;
      padding-right: 20px;
    }
    
    .brandmark {
      height: $heading-4-size;
      width: $heading-4-size;
      margin-right: 9px;
    }
    
    .logotype {
      font-size: $heading-4-size;
    }
    
    .nav-items {
      font-size: $small-paragraph;
    }
    
  }
  
  @media screen and (max-width: 1000px) {
    .nav-container {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  
</style>