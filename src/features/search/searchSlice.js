import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { asyncState } from "../../constants/common";
import { toastError } from "../../lib/toast";
import { searchKeywords } from "../../services/search.services";

const initialState = {
  searchedValues: [],
  status: "idle",
  error: null,
};

export const fetchSearchKeywords = createAsyncThunk(
  "search/keywords",
  async (keyword) => {
    try {
      const foundResults = await searchKeywords(keyword);

      return foundResults;
    } catch (error) {
      toastError(error.response.data.status_message);
    }
  }
);

const searchKeywordsSlice = createSlice({
  name: "searchKeywords",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSearchKeywords.fulfilled, (state, action) => {
      state.status = asyncState.fulfilled;

      state.searchedValues = action.payload;
    });

    builder.addCase(fetchSearchKeywords.pending, (state) => {
      state.status = asyncState.pending;
    });

    builder.addCase(fetchSearchKeywords.rejected, (state, action) => {
      state.status = asyncState.rejected;

      state.error = action.error.message;
    });
  },
});

export const getSearchResults = ({ searchKeywords }) =>
  searchKeywords.searchedValues;
export const getSearchResultsStatus = ({ searchKeywords }) =>
  searchKeywords.status;

export default searchKeywordsSlice.reducer;
