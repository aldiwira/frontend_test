<template>
    <a href="#" class="group">
        <div class="w-full h-52 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img :src="cart.images[0]" class="w-full h-full object-center object-cover group-hover:opacity-75">
        </div>
        <h3 class="mt-4 text-sm text-gray-700">
        {{cart.title}}
        </h3>
        <p class="mt-1 text-lg font-medium text-gray-900">
            Rp. {{Intl.NumberFormat('en-US').format(cart.price)}} x {{cart.qty}}
        </p>
        <p class="mt-1 text-lg font-medium text-gray-900">
            Total Rp. {{Intl.NumberFormat('en-US').format(cart.price * cart.qty)}}
        </p>
    </a>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['cart']
})
</script>
