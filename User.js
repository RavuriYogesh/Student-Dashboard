import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // Importing uuid to generate unique IDs

const Users = () => {
  const [users, setUsers] = useState([
    { id: uuidv4(), name: "Yogesh", role: "Admin", status: "Active", email: "yogesh@example.com" },
    { id: uuidv4(), name: "Ganesh", role: "Editor", status: "Inactive", email: "ganesh@example.com" },
  ]);
  const [newUser, setNewUser] = useState({ name: "", role: "", status: "Active", email: "" });

  const addUser = () => {
    if (newUser.name && newUser.email && newUser.role) {
      setUsers([...users, { ...newUser, id: uuidv4() }]);
      setNewUser({ name: "", role: "", status: "Active", email: "" });
    } else {
      alert("Please fill in all fields");
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div className="container">
      <h2 className="mt-3">User Management</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newUser.name}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          placeholder="Role"
          name="role"
          value={newUser.role}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <select
          name="status"
          value={newUser.status}
          onChange={handleChange}
          className="form-select mb-2"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button onClick={addUser} className="btn btn-primary mb-5">
          Add User
        </button>
      </div>
      
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => deleteUser(user.id)} className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
