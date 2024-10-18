<script setup lang="ts">
import CategoriesListView from "@/modules/categories/views/CategoriesListView/CategoriesListView.vue";
import ProductsView from "@/modules/product/views/ProductsView/ProductsView.vue";
</script>

<template>
  <div class="products_page">
    <CategoriesListView />
    <ProductsView />
  </div>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>
