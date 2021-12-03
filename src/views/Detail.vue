<template>
  <main>
    <h1>{{ product.title }}</h1>
    <img :src="product.image">
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import mockData from '../mock-data.json';

/**
 * @typedef Product
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {number} price
 * @property {string} image
 */

export default defineComponent({
  props: {
    id: [Number, String]
  },
  computed: {
    /** @returns {Product} */
    product() {
      return mockData.find((product) => product.id === parseInt(this.id));
    },
  },
})
</script>
