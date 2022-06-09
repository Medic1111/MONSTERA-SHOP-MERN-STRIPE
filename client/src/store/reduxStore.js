import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/modalSlice";
import cartReducer from "../features/cartSlice";
import checkOutReducer from "../features/checkOutSlice";
import FailSuccessReducer from "../features/failSuccessModal";
const reduxStore = configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartReducer,
    checkOut: checkOutReducer,
    failSuccess: FailSuccessReducer,
  },
});

export default reduxStore;
