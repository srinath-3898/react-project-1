import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ error, handleCLose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <button onClick={handleCLose}>close</button>
        </div>
        <div className={styles.modal_body}>
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
