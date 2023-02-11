import { createSlice } from "@reduxjs/toolkit";


const firstTimeSlice = createSlice({
    name: 'firstTime',
    initialState: true,
    reducers: {
        changeNotFirstTime(state) {
            return !state;
        }
    }
})

export default firstTimeSlice;