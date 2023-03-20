import { createSlice } from "@reduxjs/toolkit";
const  loginOptionSlice = createSlice({
    name:'loginOption',
    initialState:[
        {name:"Facebook",color:'#000084',icon:"facebook-square",to:'Create Account With Phone'},
        {name:"Instagram",color:'#c93b6b', icon:"instagram",to:'Create Account With Phone'},
        {name:"Twitter",color:'#25feef', icon:"twitter-square",to:'Create Account With Phone'},
        {name:"Phone Number",color:'#000000', icon:"phone-square",to:'Create Account With Phone'},
        {name:"Gmail",color:'#43f75c', icon:"google-plus",to:'Create Account With Phone'},
    ]
})

export default loginOptionSlice