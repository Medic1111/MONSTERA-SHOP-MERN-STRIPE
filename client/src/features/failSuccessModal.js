import { createSlice } from "@reduxjs/toolkit";

export const failSuccess = createSlice({
  name: "fail-success",
  initialState: { isModal: false, hasFailed: false },
  reducers: {
    setIsModal: (state) => {
      state.isModal = !state.isModal;
    },
    setHasFailed: (state, action) => {
      state.hasFailed = action.payload;
    },
  },
});

export const failSuccessActions = failSuccess.actions;

export default failSuccess.reducer;
