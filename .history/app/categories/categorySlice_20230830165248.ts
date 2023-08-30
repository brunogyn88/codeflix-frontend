interface Category {
  id: string;
  name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
  description: null | string;
}

const category = {
  id: "24287329874239- jhfds768-8979-89678743",
  name: "Category 1",
  description: "Description 1",
  is_active: true,
  deleted_at: null,
  created_at: "2021-01-01T00:00:00.000Z",
  updated_at: "2021-01-01T00:00:00.000Z",
};

const categories = [
  category,
  { ...category, id: "2428732dfd239-jhf65s768-8fd9-89678743", name: "Peach" },
  { ...category, id: "4428732dfd239-jhf65s768-8fd9-89678743", name: "Apple" },
  { ...category, id: "7428732dfd239-jhf65s768-8fd9-89678743", name: "Banana" },
];

export const initialState = {
  categories: [category],
};
