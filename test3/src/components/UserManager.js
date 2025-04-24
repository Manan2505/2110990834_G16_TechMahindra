import React, { useState } from "react";

const UserManager = ({ data, loading, error, create, updateItem, removeItem }) => {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email) {
      create(form);
      setForm({ name: "", email: "" });
    }
  };

  const handleEdit = (id) => {
    const user = data[id];
    const updated = prompt("Edit name and email (comma-separated)", `${user.name},${user.email}`);
    if (updated) {
      const [name, email] = updated.split(",");
      updateItem(id, { name, email });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Name"
          required
        />
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          required
        />
        <button type="submit">Add User</button>
      </form>

      <ul>
        {Object.entries(data).map(([id, user]) => (
          <li key={id}>
            {user.name} - {user.email}
            <button onClick={() => handleEdit(id)}>Edit</button>
            <button onClick={() => removeItem(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManager;
