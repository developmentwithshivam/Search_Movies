import { configureStore } from '@reduxjs/toolkit';
import MovieDataSlice from './MovieData/MovieDataSlice';
export const store = configureStore({
    reducer: {
      MovieData : MovieDataSlice,
    },
  });