import React from "react";
import { Bar } from "react-chartjs-2"; // Import Bar chart from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Home = () => {
  // Mock statistical data
  const stats = {
    totalUsers: 350,
    activeUsers: 280,
    inactiveUsers: 70,
    totalRoles: 5,
  };

  // Chart data (for example, active vs inactive users)
  const data = {
    labels: ["Active Users", "Inactive Users"], // X-axis labels
    datasets: [
      {
        label: "Users",
        data: [stats.activeUsers, stats.inactiveUsers],
        backgroundColor: ["#4CAF50", "#F44336"], // Green for active, red for inactive
        borderColor: ["#4CAF50", "#F44336"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-full overflow-auto"> {/* Allow scrolling for the page */}
      <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card bg-blue-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Total Users</h2>
            <p className="text-2xl font-bold">{stats.totalUsers}</p>
          </div>
        </div>
        <div className="card bg-green-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Active Users</h2>
            <p className="text-2xl font-bold">{stats.activeUsers}</p>
          </div>
        </div>
        <div className="card bg-red-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Inactive Users</h2>
            <p className="text-2xl font-bold">{stats.inactiveUsers}</p>
          </div>
        </div>
        <div className="card bg-yellow-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Total Roles</h2>
            <p className="text-2xl font-bold">{stats.totalRoles}</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="card shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center">User Statistics</h2>
          <Bar data={data} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
