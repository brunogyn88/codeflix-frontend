const category = {
  id: "24287329874239- jhfds768-8979-89678743",
  name: "Category 1",
  description: "Description 1",
  is_active: true,
  delete_at: null,
  created_at: "2021-01-01T00:00:00.000Z",
  updated_at: "2021-01-01T00:00:00.000Z",
};

const categories = [
  category,
  { ...category, id: "2428732dfd239- jhf65s768-8fd9-89678743", name: "Peach" },
];

export const initialState = {
  categories: [category],
};
