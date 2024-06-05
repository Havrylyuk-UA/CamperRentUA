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

export const getCardByType = createAsyncThunk(
  'advert/getByType',
  async (filter, thunkAPI) => {
    try {
      const response = await axios.get(`/advert?search=${filter}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
