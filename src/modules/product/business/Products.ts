import { getProducts } from "@/api/products/products";
import { IProduct } from "@/shared/models/productsTypes";
import useFilters from "@/shared/hooks/useFilters";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const Products = () => {
  const route = useRoute();
  const categoryId = route.params.id as string;
  const products = ref<IProduct[] | null>(null);
  const { selectedCategoriesIds } = useFilters;

  watch(
    selectedCategoriesIds,
    async (newData) => {
      const getselectedIds = newData
        .filter((item) => item.selected)
        .map((item) => item.id)
        .join(",");
      const data = await getProducts(categoryId ?? getselectedIds);
      products.value = data?.items || null;
    },
    { immediate: true, deep: true },
  );

  return { products };
};

export default Products;
