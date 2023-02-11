import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = `https://dummyjson.com/products`

export const fetchComponentDidMount = createAsyncThunk(`fetchAtFirstRender`,
    async() => {
        try {
            const res = await fetch(`${baseUrl}?limit=3`);
            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err)
        }
    }
);

const initialState = {
    postToRender: [],
    loadingState: 'idle'
}

const dataSlice = createSlice({
    name: 'data',
    initialState: initialState,

    extraReducers: (builder) => {

        builder.addCase(fetchComponentDidMount.pending,(state) => {
            state.loadingState = 'pending';
        });

        builder.addCase(fetchComponentDidMount.fulfilled,(state,action) => {
            state.loadingState = 'succeeded';
            state.postToRender = action.payload.products
            console.log(action.payload.products)
        });

        builder.addCase(fetchComponentDidMount.rejected,(state) => {
            state.loadingState = 'failed';
        })
    }
})
export default dataSlice;