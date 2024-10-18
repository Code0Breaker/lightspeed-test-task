<script setup lang="ts">
import { VNode } from "vue";

defineSlots<{
  "list-item": () => VNode[];
}>();
</script>

<template>
  <div class="categories">
    <ul class="categories__list">
      <slot name="list-item"></slot>
    </ul>
  </div>
</template>
