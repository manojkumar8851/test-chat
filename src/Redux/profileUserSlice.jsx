import { createSlice } from "@reduxjs/toolkit";


const initialState={
  user:null,
}
const profileUserSlice = createSlice({
  name:"profile",
  initialState,
  reducers: {
    user:(state,action)=>{
      state.user = action.payload
    }
  }
})
export const {user} = profileUserSlice.actions;
const profileSlice = profileUserSlice.reducer
export default profileSlice;