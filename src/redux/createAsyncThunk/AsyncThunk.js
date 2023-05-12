import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, EACH_MOVIE } from "../../services/utils/utils";
import axios from "axios";

export const getAllMovies = createAsyncThunk("get/movies", async () => {
  return await axios.get(BASE_URL).then((res) => res.data);
});

export const singleMovie = createAsyncThunk("get/single", async (payload) => {
  return await axios({
    method: "GET",
    url: EACH_MOVIE + payload,
  }).then((res) => res.data);
});
