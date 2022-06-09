import classes from "./CheckOutForm.module.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../features/modalSlice";
import { checkOutActions } from "../../features/checkOutSlice";
import { failSuccessActions } from "../../features/failSuccessModal";
import { cartActions } from "../../features/cartSlice";

import React, { useState } from "react";

const CheckOutForm = () => {
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
  });

  const onBillingChange = (event) => {
    const { name, value } = event.target;
    setBillingInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const onShippingChange = (event) => {
    const { name, value } = event.target;
    setShippingInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const totalInCart = useSelector((state) => state.cart.value.totalCost);
  const dispatch = useDispatch();

  const closeCheckOutHandler = () => {
    dispatch(checkOutActions.toggle());
    dispatch(modalActions.toggleModal());
  };

  const stripe = useStripe();
  const elements = useElements();

  // STRIPE
  const payHandler = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      axios
        .post("/stripe/charge", {
          id: paymentMethod.id,
          amount: Number(`${totalInCart}00`),
          billingInfo,
          shippingInfo,
        })
        .then((serverRes) => {
          dispatch(checkOutActions.toggle());
          dispatch(modalActions.toggleModal());
          dispatch(failSuccessActions.setHasFailed(false));
          dispatch(failSuccessActions.setIsModal());
          dispatch(cartActions.clearCart());
        })
        .catch((err) => {
          console.log(err.response.status);
          if (err.response.status === 400) {
            dispatch(failSuccessActions.setHasFailed(true));
            dispatch(failSuccessActions.setIsModal());
          }
        });
    } else {
      console.log(error.message);
    }
  };

  return (
    <form className={classes.form}>
      <p className={classes.pTotal}>
        Total: $<span>{totalInCart}</span>
      </p>
      <div className={classes.cardNumber}>
        <CardElement />
      </div>
      <input
        className={classes.cardNumber}
        type="text"
        placeholder="Name on card"
        name="name"
        value={billingInfo.name}
        onChange={onBillingChange}
      />
      <input
        className={classes.cardNumber}
        type="text"
        placeholder="Billing address"
        name="address"
        value={billingInfo.address}
        onChange={onBillingChange}
      />

      <input
        className={classes.cardNumber}
        type="text"
        placeholder="City"
        name="city"
        value={billingInfo.city}
        onChange={onBillingChange}
      />

      <input
        className={classes.cardNumber}
        type="text"
        placeholder="State"
        name="state"
        value={billingInfo.state}
        onChange={onBillingChange}
      />
      <input
        className={classes.cardNumber}
        type="text"
        placeholder="Shipping address"
        name="address"
        value={shippingInfo.address}
        onChange={onShippingChange}
      />
      <input
        className={classes.cardNumber}
        type="text"
        placeholder="City"
        name="city"
        value={shippingInfo.city}
        onChange={onShippingChange}
      />
      <input
        className={classes.cardNumber}
        type="text"
        placeholder="State"
        name="state"
        value={shippingInfo.state}
        onChange={onShippingChange}
      />
      <input
        className={classes.cardNumber}
        type="text"
        placeholder="Zip"
        name="zip"
        value={shippingInfo.zip}
        onChange={onShippingChange}
      />
      <div className={classes.btnBox}>
        <button onClick={payHandler} className={classes.btn}>
          Submit payment
        </button>
        <button onClick={closeCheckOutHandler} className={classes.btn}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CheckOutForm;
