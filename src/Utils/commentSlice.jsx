import { createSlice } from "@reduxjs/toolkit";
import { timeconstent } from "./Constent";

const commentslice = createSlice({
    name:'chat',
    initialState:{
    messages:[],
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(timeconstent,1)
            state.messages.push(action.payload)
        },
    },
})
export const {addMessage} = commentslice.actions;
export default commentslice.reducer