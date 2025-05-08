import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice.js';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // Enables Redux DevTools in development
});

export default store;
