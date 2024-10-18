import { getProduct } from "@/api/products/products";
import useCartStorage from "@/shared/hooks/useCartStorage";
import { IProduct } from "@/shared/models/productsTypes";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const Product = () => {
  const { localStorageItemPush } = useCartStorage;
  const product = ref<IProduct | null>(null);
  const count = ref(1);
  const route = useRoute();

  onMounted(async () => {
    const id = route.params.id as string;
    const productData = await getProduct(id);
    product.value = productData || null;
  });

  const incrementCount = () => {
    count.value++;
  };

  const decrementCount = () => {
    if (count.value > 1) count.value--;
  };

  return {
    count,
    product,
    localStorageItemPush,
    incrementCount,
    decrementCount,
  };
};

export default Product;
