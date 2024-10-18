import { TProduct } from "@/shared/models/productsTypes";
import { reactive, ref, watch } from "vue";

const useCartStorage = () => {
  const key = "card";
  const storedValue = localStorage.getItem(key);
  const parsedStoredValue = storedValue ? JSON.parse(storedValue) : [];
  const data = reactive<{ cartItem: TProduct[] }>({
    cartItem: Array.isArray(parsedStoredValue) ? parsedStoredValue : [],
  });
  const totalItems = ref(0);

  watch(
    data,
    (newValue) => {
      if (newValue === null || newValue === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue.cartItem));
      }

      totalItems.value = data.cartItem.reduce(
        (total, item) => total + item.quantity,
        0,
      );
    },
    { deep: true, immediate: true },
  );

  const localStorageItemPush = ({
    id,
    name,
    price,
    quantity,
    imageUrl,
  }: TProduct) => {
    const foundCartItem = data.cartItem.find((item) => item.id === id);

    if (foundCartItem) {
      foundCartItem.quantity += quantity;
    } else {
      data.cartItem.push({
        id,
        name,
        price,
        quantity,
        imageUrl,
      });
    }
  };

  const removeItemById = (id: number) => {
    const index = data.cartItem.findIndex((item) => item.id === id);
    if (index !== -1) {
      data.cartItem.splice(index, 1);
    }
  };

  return {
    data,
    totalItems,
    localStorageItemPush,
    removeItemById,
  };
};

export default useCartStorage();
