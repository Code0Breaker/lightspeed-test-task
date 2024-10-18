import { IProduct } from "@/shared/models/productsTypes";

export interface IProductsListResponse {
  total: number;
  count: number;
  offset: number;
  limit: number;
  items: IProduct[];
}
