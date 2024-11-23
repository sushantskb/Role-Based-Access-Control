import React, { useState } from "react";
import { initialRoles } from "../assets/data/sampleData";



const Roles = () => {
  const [roles, setRoles] = useState(initialRoles);
  const [editingRole, setEditingRole] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    permissions: [],
  });

  // Handle form data changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => {
        const newPermissions = checked
          ? [...prev.permissions, value]
          : prev.permissions.filter((permission) => permission !== value);
        return { ...prev, permissions: newPermissions };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submission (Add/Edit role)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingRole) {
      // Edit existing role
      setRoles((prevRoles) =>
        prevRoles.map((role) =>
          role.id === editingRole.id ? { ...role, ...formData } : role
        )
      );
    } else {
      // Add new role
      setRoles([
        ...roles,
        { id: roles.length + 1, name: formData.name, permissions: formData.permissions },
      ]);
    }
    setFormData({ name: "", permissions: [] });
    setEditingRole(null); // Reset editing role state
  };

  // Handle editing a role
  const handleEdit = (role) => {
    setEditingRole(role);
    setFormData({
      name: role.name,
      permissions: role.permissions,
    });
  };

  // Handle deleting a role
  const handleDelete = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Role Management</h2>

      {/* Role Form (Add/Edit) */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Role Name"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <div className="space-y-2">
          <h3 className="text-xl">Permissions</h3>
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              name="permissions"
              value="Read"
              checked={formData.permissions.includes("Read")}
              onChange={handleInputChange}
              className="checkbox"
            />
            <span className="label-text">Read</span>
          </label>
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              name="permissions"
              value="Write"
              checked={formData.permissions.includes("Write")}
              onChange={handleInputChange}
              className="checkbox"
            />
            <span className="label-text">Write</span>
          </label>
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              name="permissions"
              value="Delete"
              checked={formData.permissions.includes("Delete")}
              onChange={handleInputChange}
              className="checkbox"
            />
            <span className="label-text">Delete</span>
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full max-w-xs"
        >
          {editingRole ? "Save Changes" : "Add Role"}
        </button>
      </form>

      {/* Role List */}
      <div className="overflow-x-auto">
        <table className="table w-full">
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
                <td>
                  {role.permissions.join(", ")}
                </td>
                <td>
                  <button
                    onClick={() => handleEdit(role)}
                    className="btn btn-warning btn-sm mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(role.id)}
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Roles;
