import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../features/modalSlice";

const Header = () => {
  const dispatch = useDispatch();

  const openCartHandler = () => {
    dispatch(modalActions.toggleModal());
  };

  const modalSelector = useSelector((state) => state.cart.value);

  return (
    <header className={classes.header}>
      <h1 className={classes.h1}>MONSTERA</h1>
      <button onClick={openCartHandler} className={classes.cartBtn}>
        CART <span className={classes.span}>{modalSelector.amountOfItems}</span>
      </button>
    </header>
  );
};

export default Header;
