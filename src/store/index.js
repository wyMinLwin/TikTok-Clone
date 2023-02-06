import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";

const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
    }
})

export default store;