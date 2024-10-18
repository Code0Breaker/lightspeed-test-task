import CartView from "@/modules/cart/views/CartView/CartView.vue";
import MainLayout from "@/modules/layouts/MainLayout/MainLayout.vue";
import CategoriesPage from "@/pages/CategoriesPage/CategoriesPage.vue";
import ProductPage from "@/pages/ProductPage/ProductPage.vue";
import ProductsPage from "@/pages/ProductsPage/ProductsPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    component: MainLayout,
    children: [
      {
        path: "",
        component: ProductsPage,
        name: "Products",
      },
      {
        path: "/product/:id",
        component: ProductPage,
        name: "Product",
      },
      {
        path: "cart",
        component: CartView,
        name: "Cart",
      },
      {
        path: "/category/:id",
        component: CategoriesPage,
        name: "Category",
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
