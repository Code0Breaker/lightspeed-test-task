import { getCategory } from "@/api/category/category";
import { ICategory } from "@/shared/models/categoriesTypes";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const Category = () => {
  const category = ref<ICategory | null>(null);
  const route = useRoute();

  onMounted(async () => {
    if (route && route.params && route.params.id) {
      const categoryId = route.params.id as string;
      const categoryData = await getCategory(categoryId);
      category.value = categoryData || null;
    }
  });

  return { category };
};

export default Category;
