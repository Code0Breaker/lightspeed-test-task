<script setup lang="ts">
import { IProduct, TProduct } from "@/shared/models/productsTypes";
import { RouterLink } from "vue-router";

defineProps<{ product: IProduct }>();
const emit = defineEmits<{
  (e: "add", state: TProduct): void;
}>();
</script>

<template>
  <RouterLink class="card" :to="`/product/${product.id}`">
    <div class="card__image">
      <img :src="product.imageUrl" alt="Product image" />
      <button
        class="card__image-add_button"
        @click.stop.prevent="emit('add', { ...product, quantity: 1 })"
      >
        Add to Cart
      </button>
    </div>
    <b class="card__title">{{ product.name }}</b>
    <div class="card__description" v-html="product.description" />
    <p class="card__price">${{ product.price.toFixed(2) }}</p>
  </RouterLink>
</template>

<style lang="scss">
@import "./style.scss";
</style>
