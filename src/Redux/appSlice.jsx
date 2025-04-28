import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  themeMode: "light",
  rem: '16px'
}

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.themeMode = action.payload
    },
    rootFontSize:(state, action) => {
      state.rem = action.payload
}
  }
})
export const { changeTheme,rootFontSize } = appSlice.actions;
const appReducer = appSlice.reducer
export default appReducer;