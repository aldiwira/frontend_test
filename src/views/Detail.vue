<template>
  <main class="container mx-auto">
    <div class="flex flex-col md:flex-row max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="flex-1">
        <div class="w-full h-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img :src="product.images[0]" class="w-full h-full object-center object-cover group-hover:opacity-75">
        </div>
      </div>
      <div class="flex-1 mx-10">
        <h1 class="my-4 text-5xl text-gray-700">
        {{product.title}}
        </h1>
        <p class="mt-1 text-lg font-medium text-gray-900">
        Rp. {{Intl.NumberFormat('en-US').format(product.price)}}
        </p>
        <p class="mt-1 text-sm text-gray-900">
        {{product.description}}
        </p>
        <button type="submit" @click="addToCart()" class="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to bag</button>
      </div>
    </div>
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
  methods: {
    addToCart() {
      this.$store.dispatch('addCart', {...this.product, qty : 1});
      alert('Success add to cart')
    }
  }
})
</script>
