import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import categoriesSlice from "./categoriesSlice";

const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        categories: categoriesSlice.reducer,
    }
})

export default store;