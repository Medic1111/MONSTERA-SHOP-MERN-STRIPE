import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: {
      amountOfItems: 0,
      totalCost: 0,
      cartItemsArr: [],
    },
  },
  reducers: {
    addToItems: (state, action) => {
      state.value = {
        ...state.value,
        amountOfItems: state.value.amountOfItems + action.payload,
      };
    },
    removeFromItems: (state, action) => {
      state.value = {
        ...state.value,
        amountOfItems: state.value.amountOfItems - action.payload,
      };
    },
    addToCost: (state, action) => {
      state.value = {
        ...state.value,
        totalCost: state.value.totalCost + action.payload,
      };
    },
    removeFromCost: (state, action) => {
      state.value = {
        ...state.value,
        totalCost: state.value.totalCost - action.payload,
      };
    },
    pushToArr: (state, action) => {
      let isItThere = state.value.cartItemsArr.find(
        (obj) => obj.name === action.payload.name
      );
      if (!isItThere) {
        state.value = {
          ...state.value,
          cartItemsArr: [...state.value.cartItemsArr, action.payload],
        };
      } else {
        isItThere.quantity += action.payload.quantity;
      }
    },
    removeFromArr: (state, action) => {
      state.value = {
        ...state.value,
        cartItemsArr: [
          ...state.value.cartItemsArr.filter((obj) => {
            return obj.id !== action.payload;
          }),
        ],
      };
    },
    clearCart: (state) => {
      state.value = {
        amountOfItems: 0,
        totalCost: 0,
        cartItemsArr: [],
      };
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
