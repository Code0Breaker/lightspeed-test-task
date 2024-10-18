import { ref } from "vue";

const useFilters = () => {
  const selectedCategoriesIds = ref<{ id: number; selected: boolean }[]>([]);

  const setFilter = (id: number, selected: boolean) => {
    const findExistFilter = selectedCategoriesIds.value.findIndex(
      (item) => item.id === id,
    );
    if (findExistFilter === -1) {
      selectedCategoriesIds.value = [
        ...selectedCategoriesIds.value,
        { id, selected },
      ];
    } else {
      const updatedFilter = [...selectedCategoriesIds.value];
      updatedFilter[findExistFilter].selected = selected;
      selectedCategoriesIds.value = updatedFilter;
    }
  };

  const clearFilter = () => (selectedCategoriesIds.value = []);

  return { clearFilter, setFilter, selectedCategoriesIds };
};

export default useFilters();
