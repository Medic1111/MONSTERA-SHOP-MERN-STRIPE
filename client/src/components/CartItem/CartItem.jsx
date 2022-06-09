import React from "react";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../features/cartSlice";

const CartItem = ({ id, name, price, quantity }) => {
  const cartDispatch = useDispatch();

  const removeItemHandler = () => {
    cartDispatch(cartActions.removeFromItems(quantity));
    cartDispatch(cartActions.removeFromArr(id));
    cartDispatch(cartActions.removeFromCost(price * quantity));
  };

  return (
    <li id={id} className={classes.li}>
      <h3 className={classes.name}>{name}</h3>
      <h3 className={classes.price}>
        ${price} <span className={classes.quantity}>x{quantity}</span>{" "}
        <button onClick={removeItemHandler} className={classes.removeBtn}>
          X
        </button>
      </h3>
    </li>
  );
};

export default CartItem;
