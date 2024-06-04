import { createSlice } from '@reduxjs/toolkit';
import { fetchCard, getCardById, getCardByType } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  cards: [],
  favorite: [],
  details: {},
  isLoading: false,
  limit: 4,
  page: 1,
  error: null,
};

export const cardSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    addLimit(state) {
      state.limit += 4;
    },
    addFavorite(state, { payload }) {
      state.favorite = [...state.favorite, payload];
    },
    removeFavorite(state, { payload }) {
      state.favorite = state.favorite.filter(
        camper => camper._id !== payload._id
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCard.pending, handlePending)
      .addCase(fetchCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cards = action.payload;
      })
      .addCase(fetchCard.rejected, handleRejected)
      .addCase(getCardById.pending, handlePending)
      .addCase(getCardById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isOpen = true;
        state.error = null;
        state.details = action.payload;
      })
      .addCase(getCardById.rejected, handleRejected)
      .addCase(getCardByType.pending, handlePending)
      .addCase(getCardByType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cards = action.payload;
      })
      .addCase(getCardByType.rejected, handleRejected);
  },
});

export const { addFavorite, removeFavorite, addLimit } = cardSlice.actions;

export default cardSlice.reducer;
