<template>

  <main class="container mx-auto">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Products</h2>
        <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <article
            v-for="product in products"
            :key="product.id"
          >
            <ItemBox :product="product"/>
          </article>
        </div>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import mockData from '../mock-data.json';
import ItemBox from "../layouts/ItemBox.vue";

export default defineComponent({
  components: {
    ItemBox
  },
  data() {
    return {
      products: mockData,
    }
  },
})
</script>
