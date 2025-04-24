import React, { useState, useCallback } from "react";
import AddUserForm from "./AddUserForm";
import UserList from "./UserList";

const App = () => {
  const [users, setUsers] = useState(["radha", "krishna"]);

  const addUser = useCallback((name) => {
    setUsers((prevUsers) => [...prevUsers, name]);
  }, []);

  const deleteUser = useCallback((index) => {
    setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Manager</h1>
      <AddUserForm onAddUser={addUser} />
      <UserList users={users} onDeleteUser={deleteUser} />
    </div>
  );
};

export default App;
