import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    location: '',
    form: '',
    details: [],
  },
  reducers: {
    setFilterLocation(state, action) {
      state.location = action.payload;
    },
    setFilterForm(state, action) {
      state.form = action.payload;
    },
    setFilterDetails(state, action) {
      state.details = [...state.details, action.payload];
      console.log(state.details);
    },
  },
});

export const { setFilterLocation, setFilterForm, setFilterDetails } =
  filterSlice.actions;

export default filterSlice.reducer;
