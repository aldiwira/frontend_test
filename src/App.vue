<template>
  <div :class="{ 'dark': darkMode }" class="mt-[64px]">
    <Header />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Header from './layouts/Header.vue';

export default defineComponent({
  components: {
    Header,
  },
  data() {
    return {
      darkMode: false,
    }
  },
})
</script>
