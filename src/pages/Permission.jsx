import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePermission } from "../redux/features/roleSlice";

const Permission = () => {
  const roles = useSelector((state) => state.roles.roles || []);
  const permissions = useSelector((state) => state.roles.permissions || []);
  const dispatch = useDispatch();

  const [selectedRoleId, setSelectedRoleId] = useState(null);

  const handleRoleSelect = (roleId) => {
    setSelectedRoleId(roleId);
  };

  const selectedRole = roles.find((role) => role.id === selectedRoleId);

  const handleTogglePermission = (permission) => {
    if (selectedRoleId) {
      dispatch(
        togglePermission({
          roleId: selectedRoleId,
          permission,
        })
      );
    }
  };

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
                  checked={selectedRole.permissions.includes(permission)}
                  onChange={() => handleTogglePermission(permission)}
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">{permission}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Display Current Permissions */}
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
