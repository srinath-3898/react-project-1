import React, { useState } from "react";
import UserForm from "./components/Users/UserForm/UserForm";
import Users from "./components/Users/Users";
import Modal from "./components/Modal/Modal";

function App() {
  const [userFormData, setUserFormData] = useState({
    name: "",
    age: "",
    id: "",
  });
  const [users, setUsers] = useState([]);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddUser = (userFormData) => {
    if (userFormData.name.trim().length === 0) {
      setError("Please enter name");
      setErrorModalOpen(true);
    } else if (userFormData.age < 0) {
      setError("Age cannot be negative");
      setErrorModalOpen(true);
    } else {
      setUsers((prevState) => [userFormData, ...prevState]);
    }
  };
  return (
    <div>
      <UserForm
        userFormData={userFormData}
        handleAddUser={handleAddUser}
        handleInputChange={handleInputChange}
      />
      <Users users={users} />
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
    </div>
  );
}

export default App;
