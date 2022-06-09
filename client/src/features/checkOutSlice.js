import { createSlice } from "@reduxjs/toolkit";

export const checkOutSlice = createSlice({
  name: "checkOut",
  initialState: { show: false },
  reducers: {
    toggle: (state) => {
      state.show = !state.show;
    },
  },
});

export const checkOutActions = checkOutSlice.actions;

export default checkOutSlice.reducer;
