import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  reciveUser: null,
}

const reciveUserSlice = createSlice({
  name: "reciveUserSlice",
  initialState,
  reducers: {
    reciverName: (state, action) => {
      state.reciveUser = action.payload
    }
  }
})

export const { reciverName } = reciveUserSlice.actions;
const reciveUserReducer = reciveUserSlice.reducer
export default reciveUserReducer; 