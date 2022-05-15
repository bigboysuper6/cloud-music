import { createSlice } from "@reduxjs/toolkit";

export const playMusicSlice = createSlice({
  name: "playmusic",
  initialState: {
    value: false,
  },
  reducers: {
    changeMusicData: (state, musicId) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = musicId;
    },
    changeMusicStatus: (state) => {
      state.value.payload.status = !state.value.payload.status;
    },
    setMusicStatusTrue: (state) => {
      state.value.payload.status = true;
    },
    setMusicIndex: (state, index) => {
      state.value.payload.index = index;
    },
    incrementIndex: (state) => {
      state.value.payload.index.payload = state.value.payload.index.payload + 1;
    },
    decrementIndex: (state) => {
      state.value.payload.index.payload = state.value.payload.index.payload - 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  incrementIndex,
  decrementIndex,
  changeMusicData,
  changeMusicStatus,
  setMusicStatusTrue,
  setMusicIndex,
} = playMusicSlice.actions;

export default playMusicSlice.reducer;
