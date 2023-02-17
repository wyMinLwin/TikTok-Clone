import { createSlice } from "@reduxjs/toolkit";

import data from '../../db'

const initialState = data;

const devTestDBSlice = createSlice({
    name:'devTestDB',
    initialState:  initialState
})

export default  devTestDBSlice;