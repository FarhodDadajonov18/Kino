import { createSlice } from "@reduxjs/toolkit";
import { getAllMovies, singleMovie } from "../createAsyncThunk/AsyncThunk";

const initialState = {
  movies: [],
  moviesLoading: true,

  eachMovie: {},
  eachLoading: true,
  error: "",
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (buid) => {
    buid
      .addCase(getAllMovies.pending, (state, action) => {
        state.moviesLoading = true;
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.moviesLoading = false;
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        state.moviesLoading = false;
        state.error = action.error;
      });
    buid
      .addCase(singleMovie.pending, (state, action) => {
        state.eachLoading = true;
      })
      .addCase(singleMovie.fulfilled, (state, action) => {
        state.eachMovie = action.payload;
        state.eachLoading = false;
      })
      .addCase(singleMovie.rejected, (state, action) => {
        state.eachLoading = false;
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
