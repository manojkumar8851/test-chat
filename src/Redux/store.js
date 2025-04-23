import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    chat: chatReducer,
    user: userReducer, // Added user reducer
  },
});

export const persistor = persistStore(store);
export default store;