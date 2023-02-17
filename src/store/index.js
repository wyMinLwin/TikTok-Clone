import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import categoriesSlice from "./categoriesSlice";
import firstTimeSlice from "./firstTimeSlice";
import devTestDBSlice from "./devTestDBSlice";

const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        categories: categoriesSlice.reducer,
        firstTime: firstTimeSlice.reducer,
        devTestDB: devTestDBSlice.reducer,
    }
})

export default store;