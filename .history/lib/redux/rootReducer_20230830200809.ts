/* Instruments */
import { counterSlice } from "./slices";
import categorySlice from "./slices/categorySlice/categorySlice";

export const reducer = {
  counter: counterSlice.reducer,
  categories: categorySlice,
};
