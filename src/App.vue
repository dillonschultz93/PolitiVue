<template>
  <div id="app">
      <Nav />
      <Jumbo />
      <Main />
      <!-- <SignUp />
      <Login /> -->
      <!-- <Footer /> -->
  </div>
</template>

<script>
import Nav from "./components/navbar.vue"
import Jumbo from "./components/jumbotron.vue"
import Main from "./components/main-view.vue"
import SignUp from "./components/sign-up.vue"
import Login from "./components/login.vue"
// import Footer from "./components/footer.vue"

export default {
  name: 'app',
  data() {
    return {
      
    }
  },
  components: {
    Nav,
    Jumbo,
    Main,
    SignUp,
    Login
    // Footer
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
  }
</style>
