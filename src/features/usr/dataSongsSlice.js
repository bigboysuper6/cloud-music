import { createSlice } from "@reduxjs/toolkit";

export const dataSongsSlice = createSlice({
  name: "datasongs",
  initialState: {
    value: false,
  },
  reducers: {
    changeDaySongsState: (state, usrStatus) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = usrStatus;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeDaySongsState } = dataSongsSlice.actions;

export default dataSongsSlice.reducer;
