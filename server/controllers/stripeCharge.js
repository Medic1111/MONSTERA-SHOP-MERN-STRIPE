const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

const stripeChargeHandler = async (req, res) => {
  const { amount, id, billingInfo, shippingInfo } = req.body;

  console.log(billingInfo, shippingInfo);

  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "USD",
      description: "Medic1111",
      payment_method: id,
      confirm: true,
    });
    res.status(200).json({ message: "Payment Successful", success: true });
  } catch (error) {
    res.status(400).json({ message: "Payment failed", success: false });
  }
};

module.exports = { stripeChargeHandler };
