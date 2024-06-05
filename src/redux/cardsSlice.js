import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllCard,
  fetchCard,
  getCardById,
  getCardByFilter,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  cards: [],
  allCards: [],
  favorite: [],
  details: {},
  isLoading: false,
  limit: 4,
  page: 1,
  isOpen: false,
  showBtn: true,
};

export const cardSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    addLimit(state) {
      state.limit += 4;
    },
    openDetails(state) {
      state.isOpen = true;
    },
    closeDetails(state) {
      state.isOpen = false;
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
        state.showBtn = true;
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
      .addCase(getCardByFilter.pending, handlePending)
      .addCase(getCardByFilter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.showBtn = false;
        state.error = null;
        state.cards = action.payload;
      })
      .addCase(getCardByFilter.rejected, handleRejected)
      .addCase(fetchAllCard.pending, handlePending)
      .addCase(fetchAllCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allCards = action.payload;
      })
      .addCase(fetchAllCard.rejected, handleRejected);
  },
});

export const {
  addFavorite,
  removeFavorite,
  addLimit,
  closeDetails,
  openDetails,
} = cardSlice.actions;

export default cardSlice.reducer;
