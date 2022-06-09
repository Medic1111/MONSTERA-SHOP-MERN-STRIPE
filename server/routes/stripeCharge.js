const express = require("express");
const router = express.Router();
const { stripeChargeHandler } = require("../controllers/stripeCharge");

router.post("/stripe/charge", stripeChargeHandler);

module.exports = router;
