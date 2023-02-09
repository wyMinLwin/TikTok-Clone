import { createSlice } from "@reduxjs/toolkit";

const initialState = ['Daily Life','Comedy','Entertainment',
'Drama','Beauty & Spa','Animals','Anime',
'Decorations','Food','Photography','Tech',
'Oddly Satisfying','Dance','Movies','Songs','Motivation']

const categoriesSlice = createSlice({
    name:'categories',
    initialState: initialState
})

export default  categoriesSlice;