export interface ICategory {
  id: number;
  imageUrl: string;
  name: string;
  url: string;
  autogeneratedSlug: string;
  description: string;
  parentId?: string;
}
