import { createSlice } from "@reduxjs/toolkit";

export const playListMusic = createSlice({
  name: "playlistmusic",
  initialState: {
    value: false,
  },
  reducers: {
    setplayListMusic: (state, playlist) => {
      console.log("已执行设置播放列表");
      state.value = playlist;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setplayListMusic } = playListMusic.actions;

export default playListMusic.reducer;
