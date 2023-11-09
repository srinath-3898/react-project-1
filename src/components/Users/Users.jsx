import React from "react";
import styles from "./Users.module.css";
import User from "./User/User";

const Users = ({ users }) => {
  return (
    <div className={styles.container}>
      {users.map((user) => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
};

export default Users;
