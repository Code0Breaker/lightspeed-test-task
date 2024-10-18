<script lang="ts" setup>
import useCartStorage from "@/shared/hooks/useCartStorage";
import ProductCard from "@/modules/product/ui/ProductCard/ProductCard.vue";
import Products from "@/modules/product/business/Products";

const { products } = Products();
const { localStorageItemPush } = useCartStorage;
</script>

<template>
  <div class="product-grid">
    <div v-for="product of products" :key="product.id">
      <ProductCard :product="product" @add="localStorageItemPush($event)" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>
