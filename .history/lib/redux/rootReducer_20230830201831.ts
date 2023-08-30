/* Instruments */
import { counterSlice } from "./slices/counterSlice";
import categoryReducer from "./slices/categorySlice/categorySlice";
import { combineReducers } from "@reduxjs/toolkit";
export const reducer = combineReducers({
  counter: counterSlice.reducer,
  categories: categoryReducer,
});
