import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import categoriesSlice from "./categoriesSlice";
import firstTimeSlice from "./firstTimeSlice";
import devTestDBSlice from "./devTestDBSlice";
import activePeopleSlice from "./activePeopleSlice";
import navbarShowSlice from "./navbarShow"
import messagesSlice from "./messagesSlice";
import activitiesSlice from "./activitiesSlice"

const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        categories: categoriesSlice.reducer,
        firstTime: firstTimeSlice.reducer,
        devTestDB: devTestDBSlice.reducer,
        navbarShow: navbarShowSlice.reducer,
        activePeople: activePeopleSlice.reducer,
        messages: messagesSlice.reducer,
        activities: activitiesSlice.reducer,
    }
})

export default store;