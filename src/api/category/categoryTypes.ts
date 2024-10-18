import { ICategory } from "@/shared/models/categoriesTypes";

export interface ICategoryListResponse {
  total: number;
  count: number;
  offset: number;
  limit: number;
  items: ICategory[];
}
