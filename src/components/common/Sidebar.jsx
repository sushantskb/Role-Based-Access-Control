import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex ${isOpen ? "w-64" : "w-20"} h-full bg-gray-800 text-white transition-all duration-300`}>
      {/* Sidebar content */}
      <div className="flex flex-col w-full">
        {/* Toggle Button */}
        <button
          className="p-4 text-2xl bg-gray-900 rounded-md text-white"
          onClick={toggleSidebar}
        >
          {isOpen ? "<<" : ">>"}
        </button>

        {/* Sidebar Menu */}
        <nav className="flex-grow">
          <ul className="space-y-4 p-4">
            <li>
              <Link
                to="/users"
                className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md"
              >
                <span className="text-lg">👥</span>
                {isOpen && <span>User Management</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/roles"
                className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md"
              >
                <span className="text-lg">⚙️</span>
                {isOpen && <span>Role Management</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/permission"
                className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md"
              >
                <span className="text-lg">🔒</span>
                {isOpen && <span>Permissions</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
