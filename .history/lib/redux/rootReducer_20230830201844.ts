/* Instruments */
import { counterSlice } from "./slices/counterSlice";
import categoryReducer from "./slices/categorySlice/categorySlice";
export const reducer = {
  counter: counterSlice.reducer,
  categories: categoryReducer,
};
