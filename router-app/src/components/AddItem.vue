<template>
<div id="app">
  <ul>
    <h1> Add Item page </h1>
    <form id="signup-form" @submit.prevent="processForm">
      <!-- name -->

      <label class="label">Name</label>
      <input type="text" class="input" name="name" v-model="name">

      <label class="label">Price</label>
      <input type="text" class="input" name="price" v-model="price">

      <label class="label">Quantity</label>
      <input type="text" class="input" name="quantity" v-model="amount">

      <label class="label">Description</label>
      <input type="text" class="input" name="description" v-model="description">


      <!-- submit button -->

      <button type="submit">Submit</button>

    </form>
    </li>
  </ul>
  <router-view />
</div>
</template>


<script>
import axios from "axios";
export default {
  name: 'AddItem',
  data() {
    return {
      name: " ",
      description: " ",
      price: " ",
      amount: " ",
    }
  },

  methods: {


    processForm() {
      axios.post(`http://localhost:5555/item/add`, {
        name: this.name,
        description: this.description,
        price: this.price,
        amount: this.amount,
      });
    }

  }
}
</script>
