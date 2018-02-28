<template>
  <div id="app">
      <Nav />
      <Jumbo />
      <Main />
      <Footer />
  </div>
</template>

<script>
import Nav from "./components/navbar.vue"
import Jumbo from "./components/jumbotron.vue"
import Main from "./components/main-view.vue"
import Footer from "./components/footer.vue"
import Profile from "./components/profiles/card.vue"

export default {
  name: 'app',
  components: {
    Nav,
    Jumbo,
    Main,
    Footer,
    Profile
  }
}
</script>

<style lang="scss">

</style>
