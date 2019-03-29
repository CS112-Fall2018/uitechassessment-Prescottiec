<template>
<div id="app">
  <ul>
    <li v-for="data in info" v-bind:key="data.id"> {{data.id}}.) {{data.name}}: {{data.description}} - ${{data.price}}, Quantity: ({{data.amount}})
    </li>
  </ul>
  <router-view />
</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Cartlist',
  data() {
    return {
      info: null
    }
  },
  mounted() {
    axios
      .get('http://localhost:5555/list')
      .then(response => (this.info = response.data));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
