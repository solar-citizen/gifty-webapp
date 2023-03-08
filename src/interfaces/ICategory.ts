export type ICategory = {
  id: number; // ----> id?: number
  name: string;
};

export type ICategoryResponse = {
  categories: ICategory[];
};

export type ICategoryCreateRequest = {
  name: string;
};
