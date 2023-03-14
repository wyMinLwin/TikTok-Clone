import { createSlice } from "@reduxjs/toolkit";

const navbarShowSlice = createSlice({
    name : "navbarShow",
    initialState : false,
    reducers : {
        controlNavbarShow (state) {
            return !state
        },
        hideNavbarShow (state) {
            return state = true;
        },
        showNavbarShow (state) {
            return state = false;
        }
    }
})

export default navbarShowSlice;