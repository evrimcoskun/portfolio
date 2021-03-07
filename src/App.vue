<template>
  <div id="app">
    <Header/>
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html {
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
  line-height: 1.6;
}
body {
  background-color: #efeeee;
}
a {
  color: #357b70;
}
a:hover {
  text-decoration: none;
}
.content {
  max-width: 960px;
  margin: auto;
  padding: 0 40px;
}

.section-title {
  margin-bottom: 0;
  font-size: 2em;
}

.button {
  padding: 8px 10px;
  background-color: #6591a3;
  border: 1px solid #6591a3;
  color: #efeeee;
  font-size: .8em;
  text-decoration: none;
  margin-right: 10px;
  border-radius: 2px;
  transition: background-color ease-in-out 300ms
}
.button:hover {
  background-color: #507381;
}
.button__secondary {
  background-color: transparent;
  border: 1px solid #6591a3;
  color: #2c3e50;
}
.button__secondary:hover {
  background-color: #cedbe0;
}
h4 {
  margin-bottom: 0;
}
</style>
