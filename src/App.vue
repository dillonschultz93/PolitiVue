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

export default {
  name: 'app',
  components: {
    Nav,
    Jumbo,
    Main,
    Footer
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
  }
</style>
