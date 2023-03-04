import { createSlice } from "@reduxjs/toolkit";
import activitiesDB from "../../activitiesDB";

const activitiesSlice = createSlice({
    name:'activities',
    initialState: activitiesDB,
})

export default activitiesSlice;