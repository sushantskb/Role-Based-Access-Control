import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addRole, togglePermission } from "../redux/features/roleSlice";

const Roles = () => {
  const roles = useSelector((state) => state.roles.roles);
  const permissions = useSelector((state) => state.roles.permissions);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    permissions: [],
  });

  const [editingRoleId, setEditingRoleId] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingRoleId) {
      dispatch(
        togglePermission({
          roleId: editingRoleId,
          permissions: formData.permissions,
        })
      );
    } else {
      dispatch(
        addRole({
          id: roles.length + 1,
          name: formData.name,
          permissions: formData.permissions || [],
        })
      );
    }
    setFormData({ name: "", permissions: [] });
    setEditingRoleId(null);
  };

  const handleEdit = (role) => {
    setEditingRoleId(role.id);
    setFormData({
      name: role.name,
      permissions: role.permissions,
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Role Management</h2>

      {/* Role Form */}
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
          {permissions.map((permission) => (
            <label key={permission} className="label cursor-pointer">
              <input
                type="checkbox"
                name="permissions"
                value={permission}
                checked={formData.permissions.includes(permission)}
                onChange={handleInputChange}
                className="checkbox"
              />
              <span className="label-text">{permission}</span>
            </label>
          ))}
        </div>
        <button type="submit" className="btn btn-primary w-full max-w-xs">
          {editingRoleId ? "Save Changes" : "Add Role"}
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
                <td>{role.permissions.join(", ")}</td>
                <td>
                  <button
                    onClick={() => handleEdit(role)}
                    className="btn btn-warning btn-sm mr-2">
                    Edit
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
