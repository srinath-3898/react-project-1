import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ open, setOpen, error }) => {
  return (
    <div className={styles.modal} style={{ display: open ? "flex" : "none" }}>
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <button onClick={() => setOpen(false)}>close</button>
        </div>
        <div className={styles.modal_body}>
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
