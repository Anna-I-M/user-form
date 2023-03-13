import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onClose}>
        <Card className={styles.modal}>
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
        </Card>
      </div>
    </div>
  );
};

export default Modal;
