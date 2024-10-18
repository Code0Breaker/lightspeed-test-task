<script setup lang="ts">
import CategoriesView from "@/modules/categories/views/CategoriesView/CategoriesView.vue";
import ProductsView from "@/modules/product/views/ProductsView/ProductsView.vue";
</script>

<template>
  <CategoriesView />
  <div class="products">
    <ProductsView />
  </div>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>
