import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const PRODUCTS_API = "https://fakestoreapi.com/products";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    displayProducts: [],
    isLoading: false,
    error: "",
  },
  extraReducers: builder => {
    //loading
    builder.addCase(fetchProducts.pending, state => {
      state.isLoading = true;
    });

    // successful
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.displayProducts = action.payload;
      state.isLoading = false;
      state.error = "";
    });

    // error
    builder.addCase(fetchProducts.rejected, state => {
      state.isLoading = false;
      state.error = "something went wrong";
    });
  },
  reducers: {
    filterMensProducts: state => {
      state.displayProducts = state.products.filter(
        product => product.category === "men's clothing"
      );
    },
    filterWomensProducts: state => {
      state.displayProducts = state.products.filter(
        product => product.category === "women's clothing"
      );
    },
    filterTopRated: state => {
      state.displayProducts = state.products.filter(
        product => product.rating.rate >= 4
      );
    },
    filterAllProducts: state => {
      state.displayProducts = state.products;
    },
  },
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch(PRODUCTS_API);
    const data = await res.json();
    return data;
  }
);
