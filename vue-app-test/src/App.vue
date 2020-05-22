<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Father />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MarkList from "./components/MarkList.vue"
import Father from "./components/Father"

export default {
  name: 'App',
  components: {
    HelloWorld,
    MarkList,
    Father
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
