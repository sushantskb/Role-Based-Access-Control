import React, { useState, useEffect } from "react";

// Mock data for roles and permissions
const initialPermissions = ["Read", "Write", "Delete", "Execute", "Manage Users"];
const initialRoles = [
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete", "Manage Users"] },
  { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  { id: 3, name: "Viewer", permissions: ["Read"] },
];

const Permission = () => {
  const [roles, setRoles] = useState(initialRoles);
  const [permissions] = useState(initialPermissions);
  const [selectedRoleId, setSelectedRoleId] = useState(null);

  // Handle selecting a role to manage permissions
  const handleRoleSelect = (roleId) => {
    setSelectedRoleId(roleId);
  };

  const selectedRole = roles.find((role) => role.id === selectedRoleId);

  // Handle toggling a permission for a role
  const togglePermission = (permission) => {
    setRoles((prevRoles) => {
      return prevRoles.map((role) => {
        if (role.id === selectedRoleId) {
          // Check if permission exists in the role's permission array
          const hasPermission = role.permissions.includes(permission);
          const updatedPermissions = hasPermission
            ? role.permissions.filter((perm) => perm !== permission) // Remove permission
            : [...role.permissions, permission]; // Add permission

          return { ...role, permissions: updatedPermissions };
        }
        return role;
      });
    });
  };

  useEffect(() => {
    // Reset the selected role when the role list changes (to prevent stale data issues)
    if (selectedRoleId !== null && !roles.find((role) => role.id === selectedRoleId)) {
      setSelectedRoleId(null);
    }
  }, [roles, selectedRoleId]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Permission Management</h2>

      {/* Role Selection */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Select Role</h3>
        <div className="space-x-2">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => handleRoleSelect(role.id)}
              className={`btn btn-outline ${selectedRoleId === role.id ? "btn-primary" : ""}`}
            >
              {role.name}
            </button>
          ))}
        </div>
      </div>

      {/* Permissions for Selected Role */}
      {selectedRole && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Manage Permissions for {selectedRole.name}</h3>
          <div className="space-y-2">
            {permissions.map((permission) => (
              <label key={permission} className="label cursor-pointer flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selectedRole.permissions.includes(permission)} // Track permission availability
                  onChange={() => togglePermission(permission)} // Toggle permission
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">{permission}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Display current permissions for the selected role */}
      {selectedRole && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold">Current Permissions</h4>
          <ul className="list-disc pl-5">
            {selectedRole.permissions.length > 0 ? (
              selectedRole.permissions.map((perm) => <li key={perm}>{perm}</li>)
            ) : (
              <li>No permissions assigned</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Permission;
