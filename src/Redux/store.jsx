// import { configureStore } from "@reduxjs/toolkit";
// export const store = configureStore({
//   reducer:{},
// })

import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice';
import userReducer from './userSlice';
import appReducer from './appSlice';
import profileSlice from './profileUserSlice';
import reciveUserReducer from './reciveUserSlice';
// import appSlice from './appSlice';
 
const store = configureStore({
  reducer: {
    chat: chatReducer,
    userData: userReducer, // Added user reducer
    appConfig: appReducer,
    profileUser: profileSlice,
    reciver:reciveUserReducer
  },
});

export const persistor = persistStore(store);
export default store;