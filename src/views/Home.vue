<template>
  <main>
    <section>
      <article
        v-for="product in products"
        :key="product.id"
      >
        <h3>
          <router-link :to="`/detail/${product.id}`">{{ product.title }}</router-link>
        </h3>
        <p>Rp. {{ product.price }}</p>
      </article>
    </section>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import mockData from '../mock-data.json';

export default defineComponent({
  data() {
    return {
      products: mockData,
    }
  },
})
</script>
