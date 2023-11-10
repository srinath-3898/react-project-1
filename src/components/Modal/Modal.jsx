import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const ModalPortal = ({ error, handleCLose }) => {
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

const Modal = ({ error, handleCLose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalPortal error={error} handleCLose={handleCLose} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
