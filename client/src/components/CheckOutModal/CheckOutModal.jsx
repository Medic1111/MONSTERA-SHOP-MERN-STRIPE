import CheckOutPortal from "../portals/checkOutPortal/CheckOutPortal";
import StripeContainer from "../StripeContainer/StripeContainer";
const CheckOutModal = () => {
  return (
    <CheckOutPortal>
      <StripeContainer />
    </CheckOutPortal>
  );
};

export default CheckOutModal;
