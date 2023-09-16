/* Instruments */
import { counterSlice } from "./slices/counterSlice";
import categoryReducer, {
  categoriesApiSlice,
} from "./slices/categorySlice/categorySlice";
import { apiSlice } from "@/app/api/apiSlice";

const reducers = {
  counter: counterSlice.reducer,
  categories: categoryReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
};

export const reducer = {
  ...reducers,
  [categoriesApiSlice.reducerPath]: reducers[apiSlice.reducerPath],
};
