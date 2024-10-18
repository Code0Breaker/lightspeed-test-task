import { IProduct } from "@/shared/models/productsTypes";
import { API } from "../api";
import { IProductsListResponse } from "./productsTypes";

export const getProducts = async (ids?: string) => {
  try {
    const { data } = await API.get<IProductsListResponse>("products", {
      params: {
        categories: ids || undefined,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getProduct = async (id: string) => {
  try {
    const { data } = await API.get<IProduct>(`products/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
