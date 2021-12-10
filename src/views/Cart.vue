<template>
    <main class="container mx-auto p-10">
        <h1 class="text-xl my-2 sm:text-3xl">Cart</h1>
        <div v-for="cartD in $store.state.cart" :key="cartD.id">
            <ItemCart :cart="cartD"/>
        </div>
    </main>
</template>

<script>
import ItemCart from '../layouts/ItemCart.vue'
export default {
    components: {
        ItemCart
    }
}
</script>
