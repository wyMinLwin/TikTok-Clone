import { createSlice } from "@reduxjs/toolkit";

import inboxDB from '../../inboxDB'

const initialState = inboxDB.people.filter(p => p.active_status === true);

const activePeopleSlice = createSlice({
    name:'activePeople',
    initialState:  initialState
})

export default  activePeopleSlice;