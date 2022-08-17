import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    status: () => 'Under Construction',
  },
});

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice.reducer;
