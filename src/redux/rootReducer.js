import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import carsReducer from './cardsSlice';
import filterReducer from './filterSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['cards', 'limit'],
};

const persistedCarsReducer = persistReducer(persistConfig, carsReducer);

const rootReducer = combineReducers({
  cards: persistedCarsReducer,
  filter: filterReducer,
});

export default rootReducer;
