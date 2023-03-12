import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
    return (
      <section className={styles["modal-backdrop"]} onClick={props.onClose}>
        <div className={styles["modal-container"]}>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles["error-msg"]}>
            <p>{props.message}</p>
          </div>
          <footer className={styles["modal-close"]}>
            <button type="button" onClick={props.onClose}>Okay</button>
          </footer>
        </div>
      </section>
    )
   }
   
   export default Modal