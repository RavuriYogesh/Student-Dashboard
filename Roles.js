import React, { useState } from "react";

const Roles = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ]);
  const [newRole, setNewRole] = useState({ name: "", permissions: [] });

  const addRole = () => {
    if (newRole.name && newRole.permissions.length > 0) {
      setRoles([...roles, { ...newRole, id: Date.now() }]);
      setNewRole({ name: "", permissions: [] });
    } else {
      alert("Please provide role name and at least one permission");
    }
  };

  const deleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  const togglePermission = (permission) => {
    setNewRole((prev) => {
      const hasPermission = prev.permissions.includes(permission);
      return {
        ...prev,
        permissions: hasPermission
          ? prev.permissions.filter((perm) => perm !== permission)
          : [...prev.permissions, permission],
      };
    });
  };

  return (
    <div className="container">
      <h2 className="mt-3">Role Management</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Please Enter Role Name"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
          className="form-control mb-2"
        />
        <div>
          <label className="mt-3">
            <input
              type="checkbox"
              checked={newRole.permissions.includes("Read")}
              onChange={() => togglePermission("Read")}
            />
            Read
          </label><br/>
          <label className="mt-3">
            <input
              type="checkbox"
              checked={newRole.permissions.includes("Write")}
              onChange={() => togglePermission("Write")}
            />
            Write
          </label><br/>
          <label className="mt-3">
            <input
              type="checkbox"
              checked={newRole.permissions.includes("Delete")}
              onChange={() => togglePermission("Delete")}
            />
            Delete
          </label>
        </div>
        <button onClick={addRole} className="btn btn-primary mt-4">
          Add Role
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
              <td>
                <button onClick={() => deleteRole(role.id)} className="btn btn-danger btn-sm">
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

export default Roles;
