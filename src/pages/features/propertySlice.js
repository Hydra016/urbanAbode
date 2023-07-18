import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchPricePrediction = createAsyncThunk('property/pricePrediction', async (details) => {
    const { floors, bedrooms, sqft_lot } = details;

    console.log(details)

    const response = await axios.post(`http://localhost:3000/api/property`, details);
    return response
  })

const initialState = {
    price: 0,
    isLoading: false,
}

const propertySlice = createSlice({
    name: 'property',
    initialState,
    reducers: {
        getPrediction: (state, action) => {
          console.log('works')
        }
    },
    extraReducers: {
      [fetchPricePrediction.pending]: (state) => {
        state.isLoading = true
    },
    [fetchPricePrediction.fulfilled]: (state, action) => {
        state.isLoading = false
        state.price = action.payload.data.prediction
    },
    [fetchPricePrediction.rejected]: (state) => {
        state.isLoading = false
    },
    }
})

export const { getPrediction } = propertySlice.actions
export default propertySlice.reducer;
























