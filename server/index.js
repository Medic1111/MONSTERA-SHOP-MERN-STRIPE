// GENERAL
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const app = express();

// GENERAL MIDDLEWARES
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.static(path.resolve(__dirname, "../client/build")));

// PAYMENT ROUTE
const stripeChargeHandler = require("./routes/stripeCharge");
app.use("/", stripeChargeHandler);

// UNHANDLED
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..client/build", "index.html"));
});

// LISTEN
app.listen(process.env.PORT || 3003, () => console.log("server spinning"));
