import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
const stripeTestPromise = loadStripe(`${process.env.REACT_APP_PUBLIC_KEY}`);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckOutForm />
    </Elements>
  );
};
export default StripeContainer;
