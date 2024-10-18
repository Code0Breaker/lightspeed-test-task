<script setup lang="ts">
import Category from "@/modules/categories/business/Category";
const { category } = Category();
</script>

<template>
  <span>
    <RouterLink to="/">Home</RouterLink> / <span>{{ category?.name }}</span>
  </span>
</template>
