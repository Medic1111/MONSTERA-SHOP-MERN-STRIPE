import Cart from "../Cart/Cart";
import CartPortal from "../portals/cartPortal/CartPortal";

const CartModal = () => {
  return (
    <CartPortal>
      <Cart />
    </CartPortal>
  );
};

export default CartModal;
