import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import categoriesSlice from "./categoriesSlice";
import firstTimeSlice from "./firstTimeSlice";

const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        categories: categoriesSlice.reducer,
        firstTime: firstTimeSlice.reducer,
    }
})

export default store;