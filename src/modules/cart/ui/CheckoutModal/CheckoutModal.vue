<script setup lang="ts">
defineProps<{ showModal: boolean }>();
</script>

<template>
  <Teleport to="body">
    <div v-if="showModal" class="backdrop">
      <div class="success-message">
        <h2>🎉 Congratulations on your purchase! 🎉</h2>
        <p>Thank you for shopping with us!</p>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>
