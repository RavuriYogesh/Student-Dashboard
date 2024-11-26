import React, { useState } from "react";

const PermissionEditor = () => {
  const [selectedRole, setSelectedRole] = useState("Admin");
  const [permissions, setPermissions] = useState({
    read: true,
    write: true,
    delete: true,
    execute: false,
  });

  const roles = ["Admin", "Editor", "Viewer"]; // Example roles

  const handlePermissionChange = (e) => {
    const { name, checked } = e.target;
    setPermissions({ ...permissions, [name]: checked });
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleSavePermissions = () => {
    alert(`Permissions saved for ${selectedRole}: ${JSON.stringify(permissions)}`);
  };

  return (
    <div className="container">
      <h2 className="mt-3">Permission Editor</h2>
      <div className="mb-3">
        <label htmlFor="roleSelect" className="form-label">
          Select Role
        </label>
        <select
          id="roleSelect"
          value={selectedRole}
          onChange={handleRoleChange}
          className="form-select mb-3"
        >
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h5>Permissions for {selectedRole}</h5>
        <div className="form-check">
          <input
            type="checkbox"
            name="read"
            checked={permissions.read}
            onChange={handlePermissionChange}
            className="form-check-input"
          />
          <label className="form-check-label">Read</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="write"
            checked={permissions.write}
            onChange={handlePermissionChange}
            className="form-check-input"
          />
          <label className="form-check-label">Write</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="delete"
            checked={permissions.delete}
            onChange={handlePermissionChange}
            className="form-check-input"
          />
          <label className="form-check-label">Delete</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="execute"
            checked={permissions.execute}
            onChange={handlePermissionChange}
            className="form-check-input"
          />
          <label className="form-check-label">Execute</label>
        </div>
      </div>
      <button onClick={handleSavePermissions} className="btn btn-success mt-4">
        Save Permissions
      </button>
    </div>
  );
};

export default PermissionEditor;
