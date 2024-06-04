import { combineReducers } from '@reduxjs/toolkit';

import carsReducer from './cardsSlice';
import filterReducer from './filterSlice';

const rootReducer = combineReducers({
  cards: carsReducer,
  filter: filterReducer,
});

export default rootReducer;
