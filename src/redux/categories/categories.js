import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    isAvailable: () => 'Under Construction',
  },
});

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice.reducer;
