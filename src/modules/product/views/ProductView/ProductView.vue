<script setup lang="ts">
import Product from "@/modules/product/business/Product";

const { decrementCount, incrementCount, localStorageItemPush, product, count } =
  Product();
</script>

<template>
  <div class="product-page">
    <div class="product-page__image">
      <img :src="product?.imageUrl" alt="Product Image" />
    </div>

    <div class="product-page__details">
      <h1 class="product-page__details--title">{{ product?.name }}</h1>
      <p class="product-page__details--price">$ {{ product?.price }}</p>
      <div
        class="product-page__details--description"
        v-html="product?.description"
      />

      <div class="product-page__details--quantity">
        <button @click="decrementCount" class="quantity-button">-</button>
        <span class="quantity-count">{{ count }}</span>
        <button @click="incrementCount" class="quantity-button">+</button>
      </div>

      <button
        class="product-page__details--add-button"
        @click="
          product && localStorageItemPush({ ...product, quantity: count })
        "
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>
