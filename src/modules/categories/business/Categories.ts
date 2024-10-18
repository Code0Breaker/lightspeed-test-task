import { getCategories } from "@/api/category/category";
import { ICategory } from "@/shared/models/categoriesTypes";
import useFilters from "@/shared/hooks/useFilters";
import { computed, onMounted, ref } from "vue";

const Categories = () => {
  const { selectedCategoriesIds, clearFilter, setFilter } = useFilters;
  const categories = ref<ICategory[] | null>(null);

  onMounted(async () => {
    const data = await getCategories();
    categories.value = data?.items || null;
  });

  const handleCheckboxChange = (categoryId: number, event: Event) => {
    const isChecked = (event.target as HTMLInputElement).checked;
    setFilter(categoryId, isChecked);
  };

  const isActive = computed(() => {
    return !selectedCategoriesIds.value.some((item) => item.selected);
  });

  const isSelected = (id: number) => {
    return selectedCategoriesIds.value.find(
      (selectedId) => selectedId.id === id,
    )?.selected;
  };

  return {
    handleCheckboxChange,
    clearFilter,
    isSelected,
    isActive,
    categories,
    selectedCategoriesIds,
  };
};

export default Categories;
