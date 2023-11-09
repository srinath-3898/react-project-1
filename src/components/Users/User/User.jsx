import React from "react";
import styles from "./User.module.css";

const User = ({ name, age }) => {
  return (
    <div className={styles.container}>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
};

export default User;
