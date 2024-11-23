import { createSlice } from "@reduxjs/toolkit";

const initialPermissions = ["Read", "Write", "Delete", "Execute", "Manage"];

const initalRoles = [
  {
    id: 1,
    name: "Admin",
    permission: ["Read", "Write", "Delete", "Manage"],
  },
  {
    id: 2,
    name: "Editor",
    permissions: ["Read", "Write"],
  },
  {
    id: 3,
    name: "Viewer",
    permissions: ["Read"],
  },
];

const roleSlice = createSlice({
  name: "roles",
  initialState: {
    roles: initalRoles,
    permissions: initialPermissions,
  },
  reducers: {
    addRole: (state, action) => {
      state.roles.push(action.payload);
    },
    togglePermission: (state, action) => {
      const { roleId, permission } = action.payload;
      const role = state.role.find((role) => role.id === roleId);
      if (role) {
        const hasPermission = role.permission.includes(permission);
        if (hasPermission) {
          role.permission = role.permissions.filter(
            (perm) => perm !== permission
          );
        } else {
          role.permissions.push(permission);
        }
      }
    },
  },
});

export const { addRole, togglePermission } = roleSlice.actions;

export default roleSlice.reducer;
