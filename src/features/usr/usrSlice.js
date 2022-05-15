import { createSlice } from "@reduxjs/toolkit";
import Usr from "../../services/usrService";

export const usrSlice = createSlice({
  name: "usr",
  initialState: {
    value: Usr.getCurrentUser(),
  },
  reducers: {
    changeUsrState: (state, usrStatus) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = usrStatus;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeUsrState } = usrSlice.actions;

export default usrSlice.reducer;
