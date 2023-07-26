import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPricePrediction = createAsyncThunk(
  "property/pricePrediction",
  async (details) => {
    const response = await axios.post(`/api/property`, details);
    return response;
  }
);

export const fetchProperties = createAsyncThunk(
  "property/houses",
  async () => {
    const options = {
      method: 'POST',
      url: 'https://realtor.p.rapidapi.com/properties/v3/list',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '3c5db2ffacmsh8bce2dc2363c016p15cda5jsn29e33ce36c3a',
        'X-RapidAPI-Host': 'realtor.p.rapidapi.com'
      },
      data: {
        limit: 200,
        offset: 0,
        postal_code: '90004',
        status: [
          'for_sale',
          'ready_to_build'
        ],
        sort: {
          direction: 'desc',
          field: 'list_date'
        }
      }
    };
    
    try {
      const response = await axios.request(options);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
)

const initialState = {
  price: 0,
  houses: [],
  isLoading: false,
  isPriceLoading: false
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    getPrediction: (state, action) => {
      console.log("works");
    },
  },
  extraReducers: {
    [fetchPricePrediction.pending]: (state) => {
      state.isPriceLoading = true;
    },
    [fetchPricePrediction.fulfilled]: (state, action) => {
      state.isPriceLoading = false;
      state.price = Math.floor(action.payload.data.prediction);
    },
    [fetchPricePrediction.rejected]: (state) => {
      state.isPriceLoading = false;
    },
    [fetchProperties.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProperties.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.houses = action.payload?.data.data.home_search.results;
    },
    [fetchProperties.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getPrediction } = propertySlice.actions;
export default propertySlice.reducer;
