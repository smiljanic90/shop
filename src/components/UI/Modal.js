import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = ({ onCloseCart }) => {
  return <div className={classes.backdrop} onClick={onCloseCart} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

let portalElement = document.getElementById("overlays");

const Modal = ({ children, onCloseCart }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCloseCart={onCloseCart} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
