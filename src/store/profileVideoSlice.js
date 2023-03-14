import { createSlice } from "@reduxjs/toolkit"
import profileVideoDB from "../../profileVideoDB"

const profileVideoSlice = createSlice({
    name:'profileVideo',
    initialState: profileVideoDB
})

export default profileVideoSlice