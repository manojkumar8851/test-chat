import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Stores user details
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // Set user details
    },
    logout: (state) => {
      state.user = null; // Clear user details
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;