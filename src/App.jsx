import React, { useState } from "react";
import UserForm from "./components/Users/UserForm/UserForm";
import Users from "./components/Users/Users";

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = ({ name, age }) => {
    setUsers((prevState) => [{ name, age, id: Math.random() }, ...prevState]);
  };
  return (
    <div>
      <UserForm handleAddUser={handleAddUser} />
      <Users users={users} />
    </div>
  );
}

export default App;
