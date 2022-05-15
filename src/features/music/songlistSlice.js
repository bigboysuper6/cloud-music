import { createSlice } from "@reduxjs/toolkit";

export const songListMusic = createSlice({
  name: "songlistmusic",
  initialState: {
    value: [],
  },
  reducers: {
    setSongListMusic: (state, playlist) => {
      state.value = playlist;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSongListMusic } = songListMusic.actions;

export default songListMusic.reducer;
