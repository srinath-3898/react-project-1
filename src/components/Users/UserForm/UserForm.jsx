import React from "react";
import styles from "./UserForm.module.css";

const UserForm = ({ userFormData, handleInputChange, handleAddUser }) => {
  const userFormHandler = (event) => {
    event.preventDefault();
    handleAddUser(userFormData);
  };
  return (
    <div className={styles.container}>
      <h1>User Form</h1>
      <form className={styles.user_form} onSubmit={userFormHandler}>
        <div className={styles.input_controller}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Please enter user name"
            name="name"
            value={userFormData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.input_controller}>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            placeholder="Please enter user age"
            name="age"
            value={userFormData.age}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add user</button>
      </form>
    </div>
  );
};

export default UserForm;
