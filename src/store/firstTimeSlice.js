import { createSlice } from "@reduxjs/toolkit";


const firstTimeSlice = createSlice({
    name: 'firstTime',
    initialState: false,
    reducers: {
        changeNotFirstTime(state) {
            return !state;
        }
    }
})

export default firstTimeSlice;