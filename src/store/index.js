import { configureStore, createSlice } from "@reduxjs/toolkit";
import { productsSlice } from "./productsSlice";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state, action) {
      state.counter += action.payload;
    },
    decrement(state, action) {
      state.counter -= action.payload;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});

export const actions = counterSlice.actions;
export const {
  filterMensProducts,
  filterTopRated,
  filterWomensProducts,
  filterAllProducts,
} = productsSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    products: productsSlice.reducer,
  },
});

export default store;
