<script setup lang="ts">
import CategoriesList from "@/modules/categories/ui/CategoriesList/CategoriesList.vue";
import Categories from "@/modules/categories/business/Categories";

const { isActive, handleCheckboxChange, clearFilter, isSelected, categories } =
  Categories();
</script>

<template>
  <CategoriesList>
    <template #list-item>
      <li>
        <button @click="clearFilter" :disabled="isActive">clear filters</button>
      </li>
      <li
        v-for="category in categories"
        :key="category.id"
        :class="{
          'categories__list-item--active': isSelected(category.id),
        }"
        class="categories__list-item"
      >
        <input
          type="checkbox"
          :checked="isSelected(category.id)"
          @change="handleCheckboxChange(category.id, $event)"
        />
        <RouterLink :to="`/category/${category.id}`">
          {{ category.name }}
        </RouterLink>
      </li>
    </template>
  </CategoriesList>
</template>

<style lang="scss">
@import "./style.scss";
</style>
