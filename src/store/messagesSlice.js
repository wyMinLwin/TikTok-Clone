import { createSlice } from "@reduxjs/toolkit";

import inboxDB from '../../inboxDB'

const initialState = inboxDB.people;

const messagesSlice = createSlice({
    name:'messages',
    initialState:  initialState
})

export default  messagesSlice;