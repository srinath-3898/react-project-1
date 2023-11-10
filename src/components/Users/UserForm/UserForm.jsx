import React, { useRef, useState } from "react";
import styles from "./UserForm.module.css";
import Modal from "../../Modal/Modal";

const UserForm = ({ handleAddUser }) => {
  const nameInputRef = useRef(null);
  const ageInputRef = useRef(null);

  const [error, setError] = useState("");

  const userFormHandler = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError("Invalid input");
    } else if (age < 0) {
      setError("Age cannot be negative");
    } else {
      handleAddUser({ name, age });
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1>User Form</h1>
        <form className={styles.user_form} onSubmit={userFormHandler}>
          <div className={styles.input_controller}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Please enter user name"
              name="name"
              ref={nameInputRef}
            />
          </div>
          <div className={styles.input_controller}>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              placeholder="Please enter user age"
              name="age"
              ref={ageInputRef}
            />
          </div>
          <button type="submit">Add user</button>
        </form>
      </div>
      {error ? (
        <Modal
          error={error}
          handleCLose={() => {
            setError("");
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default UserForm;
