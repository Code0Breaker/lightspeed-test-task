<script setup lang="ts">
import CheckoutModal from "@/modules/cart/ui/CheckoutModal/CheckoutModal.vue";
import Cart from "@/modules/cart/business/Cart";

const {
  decrement,
  increment,
  removeItemById,
  totalItems,
  totalPrice,
  data,
  showModal,
  setShowModal,
} = Cart();
</script>

<template>
  <CheckoutModal :show-modal="showModal" />
  <div class="cart-page">
    <h1 class="cart-page__title">Your Cart</h1>
    <div class="cart-page__items">
      <div class="cart-page__item" v-for="item in data" :key="item.id">
        <div class="cart-page__item-image">
          <img :src="item.imageUrl" alt="Product Image" />
        </div>
        <div class="cart-page__item-details">
          <h2 class="cart-page__item-title">{{ item.name }}</h2>
          <p class="cart-page__item-price">Price: ${{ item.price }}</p>
          <div class="cart-page__item-quantity">
            <button @click="decrement(item.id)" class="quantity-button">
              -
            </button>
            <span class="quantity-count">{{ item.quantity }}</span>
            <button @click="increment(item.id)" class="quantity-button">
              +
            </button>
          </div>
          <button @click="removeItemById(item.id)" class="remove-button">
            Remove
          </button>
        </div>
      </div>
    </div>
    <div class="cart-page__total">
      <p>Total Items: {{ totalItems }}</p>
      <p>Total Price: ${{ totalPrice.toFixed(2) }}</p>
      <button
        class="cart-page__checkout-button"
        @click="setShowModal"
        :disabled="totalItems === 0"
      >
        Proceed to Checkout
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>
