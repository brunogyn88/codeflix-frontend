import { apiSlice } from "@/app/api/apiSlice";
import { Results } from "@/app/types/Category";
import { createSlice } from "@reduxjs/toolkit";

export interface Category {
  id: string;
  name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
  description: null | string;
}

const endpointUrl = "/categories";

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: ({ query }) => ({
    getCategories: query<Results, void>({
      query: () => endpointUrl,
      providesTags: ["Categories"],
    }),
  }),
});

const category: Category = {
  id: "24287329874239-jhfds768-8979-89678743",
  name: "Category 1",
  description: "Description 1",
  is_active: true,
  deleted_at: null,
  created_at: "2021-01-01T00:00:00.000Z",
  updated_at: "2021-01-01T00:00:00.000Z",
};

export const initialState = [
  category,
  { ...category, id: "2428732dfd239-jhf65s768-8fd9-89678743", name: "Peach" },
  { ...category, id: "4428732dfd239-jhf65s768-8fd9-89678743", name: "Apple" },
  { ...category, id: "7428732dfd239-jhf65s768-8fd9-89678743", name: "Banana" },
];

const categorySlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    createCategory(state, action) {
      state.push(action.payload);
    },
    updateCategory(state, action) {
      const index = state.findIndex(
        (category) => category.id === action.payload.id
      );
      state[index] = action.payload;
    },
    deleteCategory(state, action) {
      const index = state.findIndex(
        (category) => category.id === action.payload.id
      );
      state.splice(index, 1);
    },
  },
});

export default categorySlice.reducer;
export const { createCategory, updateCategory, deleteCategory } =
  categorySlice.actions;

export const { useGetCategoriesQuery } = categoriesApiSlice;
