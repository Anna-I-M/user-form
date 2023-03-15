import React, { Fragment } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return <Card className={styles.modal}>
    <header className={styles.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={styles["error-msg"]}>
      <p>{props.message}</p>
    </div>
    <footer className={styles["modal-close"]}>
      <Button type="button" onClick={props.onClose}>
        Okay
      </Button>
    </footer>
  </Card>;
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClose={props.onClose}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
