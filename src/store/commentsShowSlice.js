import { createSlice } from "@reduxjs/toolkit";

const commentsShowSlice = createSlice({
    name : "commentsShow",
    initialState : false,
    reducers : {
        controlCommentsShow (state) {
            return !state
        }
    }
})

export default commentsShowSlice;