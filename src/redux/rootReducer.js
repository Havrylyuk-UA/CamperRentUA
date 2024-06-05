import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import carsReducer from './cardsSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['cards'],
};

const persistedCarsReducer = persistReducer(persistConfig, carsReducer);

const rootReducer = combineReducers({
  cards: persistedCarsReducer,
});

export default rootReducer;
