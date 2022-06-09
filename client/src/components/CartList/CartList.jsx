import classes from "./CartList.module.css";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";

const CartList = () => {
  const cartSelector = useSelector((state) => state.cart.value);

  return (
    <ul className={classes.ul}>
      {cartSelector.cartItemsArr.map((obj, index) => {
        return (
          <CartItem
            key={`cartItem_${index}`}
            id={obj.id}
            name={obj.name}
            price={obj.price}
            quantity={obj.quantity}
          />
        );
      })}
    </ul>
  );
};

export default CartList;
