import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const mockapi = import.meta.env.VITE_MOCKAPI;

axios.defaults.baseURL = `https://${mockapi}.mockapi.io/api`;

export const fetchCard = createAsyncThunk(
  'advert/fetchCard',
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axios.get(`/advert?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllCard = createAsyncThunk(
  'advert/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/advert`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCardById = createAsyncThunk(
  'advert/getById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/advert/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCardByFilter = createAsyncThunk(
  'advert/getByType',
  async ({ filter, equipment }, thunkAPI) => {
    try {
      const response = await axios.get(`/advert`, {
        params: filter,
      });

      if (equipment) {
        const filteredData = (arr, arr1) => {
          return arr1.filter(obj => {
            return arr.some(key => {
              return obj.details[key] > 0;
            });
          });
        };

        const filtered = filteredData(equipment, response.data);
        return filtered;
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
