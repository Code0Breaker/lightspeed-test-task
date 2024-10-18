import useCartStorage from "@/shared/hooks/useCartStorage";
import { computed, ref } from "vue";

const Cart = () => {
  const { data, totalItems, removeItemById } = useCartStorage;
  const showModal = ref(false);

  const setShowModal = () => {
    showModal.value = true;

    setTimeout(() => {
      data.cartItem.splice(0, data.cartItem.length)
      showModal.value = false;
    }, 2000);
  };

  const totalPrice = computed(() =>
    data.cartItem.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    ),
  );

  const increment = (id: number) => {
    const item = data.cartItem.find((i) => i.id === id);
    if (item) item.quantity++;
  };

  const decrement = (id: number) => {
    const item = data.cartItem.find((i) => i.id === id);
    if (item && item.quantity > 1) {
      item.quantity--;
    } else {
      removeItemById(id);
    }
  };

  return {
    data: data.cartItem,
    totalItems,
    totalPrice,
    showModal,
    increment,
    decrement,
    removeItemById,
    setShowModal,
  };
};

export default Cart;
