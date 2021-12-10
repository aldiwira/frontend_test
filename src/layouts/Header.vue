<template>
  <header class="flex shadow-md bg-white fixed top-0 inset-x-0 z-40 p-4 md:px-8">
    <div class="w-1/4 flex items-center">
      <p class="text-4xl -my-2">
        <i-mdi-vuejs />
      </p>
      <h1 class="text-xl">VUE DEMO</h1>
    </div>
    <div class="w-1/2">
      <div class="search-bar block relative rounded">
        <input
          type="text"
          class="w-full px-4 h-8 bg-transparent ring-2 ring-gray-400 dark:ring-gray-600 rounded focus:outline-none"
          placeholder="Cari"
          name="query"
          autocomplete="off"
          required
        >
        <button aria-label="Cari" title="Cari" class="absolute right-0 top-0 w-12 h-8 bg-gray-400 dark:bg-gray-600 flex justify-center items-center">
          <i-mdi-magnify class="w-4 h-4" />
        </button>
      </div>
    </div>
    <div class="w-1/4 flex items-center justify-end">
      <i-mdi-weather-night class="w-8 h-8 mr-2" />
      <router-link :to="`/cart`">
      <i-mdi-cart class="w-8 h-8 mr-2" />
      </router-link>
      <i-mdi-bell class="w-8 h-8 mr-2" />
      <i-mdi-account-circle class="w-8 h-8" />
    </div>
  </header>
  
</template>

<script>
export default {

}
</script>
