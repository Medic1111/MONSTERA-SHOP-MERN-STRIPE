import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "isModal",
  initialState: { value: { isModal: false } },
  reducers: {
    toggleModal: (state, action) => {
      state.value.isModal = !state.value.isModal;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
