import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const rapidAPIKey = process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY;

export const fetchPricePrediction = createAsyncThunk(
  "property/pricePrediction",
  async (details) => {
    const response = await axios.post(`/api/property`, details);
    return response;
  }
);

export const fetchProperties = createAsyncThunk("property/houses", async () => {
  const options = {
    method: 'POST',
    url: 'https://realty-in-us.p.rapidapi.com/properties/v3/list',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '959f787587mshb02a1696caa686cp156877jsn5bf17418c17b',
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    },
    data: {
      limit: 200,
      offset: 0,
      postal_code: '90004',
      status: [
        'for_sale',
        'for_rent',
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
    return response
  } catch (error) {
    console.error(error);
  }
});

export const fetchSingleProperty = createAsyncThunk("property/house", async (id) => {
  const options = {
    method: 'GET',
    url: 'https://realty-in-us.p.rapidapi.com/properties/v3/detail',
    params: {
      property_id: id
    },
    headers: {
      'X-RapidAPI-Key': '959f787587mshb02a1696caa686cp156877jsn5bf17418c17b',
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    return response.data
  } catch (error) {
    console.error(error);
  }
})

const initialState = {
  price: 0,
  houses: [],
  isLoading: false,
  isPriceLoading: false,
  house: {}
};

const propertySlice = createSlice({
  name: "property",
  initialState,
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
    [fetchSingleProperty.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSingleProperty.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.house = action.payload?.data.home
    },
    [fetchSingleProperty.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default propertySlice.reducer;
