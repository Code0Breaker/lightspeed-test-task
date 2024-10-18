import { ICategory } from "@/shared/models/categoriesTypes";
import { API } from "../api";
import { ICategoryListResponse } from "./categoryTypes";

export const getCategories = async (id?: number) => {
  try {
    const { data } = await API.get<ICategoryListResponse>(`categories`, {
      params: {
        parentCategoryId: id,
        returnProductIds: true,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getCategory = async (id: string) => {
  try {
    const { data } = await API.get<ICategory>(`categories/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
