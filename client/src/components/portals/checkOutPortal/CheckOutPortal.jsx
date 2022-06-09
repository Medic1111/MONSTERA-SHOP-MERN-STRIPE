import classes from "./CheckOutPortal.module.css";
import React from "react";
import ReactDOM from "react-dom";

const portal = document.getElementById("checkOutPortal");

const PortalWrapper = (props) => {
  return <article className={classes.article}>{props.children}</article>;
};

const CheckOutPortal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <PortalWrapper>{props.children}</PortalWrapper>,
        portal
      )}
    </React.Fragment>
  );
};

export default CheckOutPortal;
