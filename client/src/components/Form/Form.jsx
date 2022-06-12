import { useState } from "react";
import classes from "./Form.module.css";
import { useDispatch } from "react-redux";
import { modalActions } from "../../features/modalSlice";
import { cartActions } from "../../features/cartSlice";

const Form = ({ id, name, price, src }) => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState(1);

  const addToCartHandler = (event) => {
    event.preventDefault();
    dispatch(modalActions.toggleModal());
    dispatch(cartActions.addToItems(Number(userInput)));
    dispatch(cartActions.addToCost(price * Number(userInput)));
    dispatch(
      cartActions.pushToArr({
        id,
        name,
        price,
        quantity: Number(userInput),
        src,
      })
    );
    setUserInput(1);
  };

  return (
    <form className={classes.form}>
      <input
        onChange={(e) => setUserInput(e.target.value)}
        id="quantity"
        name="quantity"
        value={userInput}
        className={classes.input}
        type="number"
        placeholder="Qty"
      />
      <button onClick={addToCartHandler} className={classes.btn}>
        ADD
      </button>
    </form>
  );
};

export default Form;
