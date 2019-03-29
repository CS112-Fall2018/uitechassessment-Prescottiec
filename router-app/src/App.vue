<template>
<div id="app">
  <p> my shop </p>
  <router-link to="/Cartlist">Cartlist</router-link>
  <router-link to="/AddItem">Add Items</router-link>
  <router-link to="/">HomePage</router-link>
  <router-view />
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
