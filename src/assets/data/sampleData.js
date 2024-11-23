// Mock data for users
export const initialUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Editor",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "User",
    status: "Active",
  },
];

// Mock data for roles
export const initialRoles = [
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
  { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  { id: 3, name: "Viewer", permissions: ["Read"] },
];

 // Mock data for roles and permissions
 export const initialPermissions = ["Read", "Write", "Delete", "Execute", "Manage Users"];
export const initialRoles1 = [
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete", "Manage Users"] },
  { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  { id: 3, name: "Viewer", permissions: ["Read"] },
];