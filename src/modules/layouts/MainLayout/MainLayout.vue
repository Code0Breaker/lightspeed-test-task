<script lang="ts" setup>
import Header from "@/shared/Header/Header.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <Header />
    <RouterView />
  </div>
</template>

<style lang="scss">
@import "./style.scss";
</style>
