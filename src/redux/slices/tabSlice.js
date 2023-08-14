import { createSlice } from "@reduxjs/toolkit";
const initialState=0;
const tabSlice=createSlice({
    name:"tabSlice",
    initialState,
    reducers:{
        changeTab:(state,action)=>{
            return action.payload
        }
    }
})
export const {changeTab}=tabSlice.actions;
export default tabSlice.reducer;