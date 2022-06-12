import React from "react";
import CartList from "../CartList/CartList";
import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../features/modalSlice";
import { checkOutActions } from "../../features/checkOutSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartSelector = useSelector((state) => state.cart.value);

  const closeCartModalHandler = () => {
    dispatch(modalActions.toggleModal());
  };

  const openCheckOutHandler = () => {
    dispatch(checkOutActions.toggle());
    dispatch(modalActions.toggleModal());
  };

  return (
    <React.Fragment>
      <div className={classes.div}>
        <h1 className={classes.h1}>MONSTERA</h1>
        <CartList />
        <p className={classes.total}>
          Total:<span>${cartSelector.totalCost}</span>
        </p>
        {cartSelector.totalCost !== 0 && (
          <button onClick={openCheckOutHandler} className={classes.btn}>
            Check out
          </button>
        )}
        <button onClick={closeCartModalHandler} className={classes.btn}>
          Close
        </button>
      </div>
    </React.Fragment>
  );
};

export default Cart;
