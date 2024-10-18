<script setup lang="ts">
import CartIcon from "@/assets/icons/CartIcon.vue";
import Logo from "@/assets/icons/Logo.vue";
import useCartStorage from "@/shared/hooks/useCartStorage";
import { RouterLink } from "vue-router";
const { totalItems } = useCartStorage;
</script>

<template>
  <div class="header">
    <RouterLink to="/">
      <Logo />
    </RouterLink>
    <RouterLink to="/cart">
      <div class="cart-icon-wrapper">
        <CartIcon />
        <span v-if="totalItems > 0" class="cart-badge">{{ totalItems }}</span>
      </div>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>
