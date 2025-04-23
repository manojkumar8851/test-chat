import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

const persistConfig = {
  key: 'chat',
  storage,
};

const persistedReducer = persistReducer(persistConfig, chatSlice.reducer);

export const { addMessage } = chatSlice.actions;
export default persistedReducer;
