import React from "react";
import ReactDOM from "react-dom";
import classes from "./CartPortal.module.css";

const portal = document.getElementById("cartPortal");

const PortalWrapper = (props) => {
  return <article className={classes.article}>{props.children}</article>;
};

const CartPortal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <PortalWrapper>{props.children}</PortalWrapper>,
        portal
      )}
    </React.Fragment>
  );
};

export default CartPortal;
