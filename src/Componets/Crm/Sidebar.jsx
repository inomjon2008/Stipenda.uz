import React from 'react';
import { FaTachometerAlt, FaInfoCircle, FaUsers, FaComments } from 'react-icons/fa';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
    { id: 'info', label: 'Info Portal', icon: <FaInfoCircle /> },
    { id: 'employees', label: 'Employees', icon: <FaUsers /> },
    { id: 'messenger', label: 'Messenger', icon: <FaComments /> },
  ];

  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <div className="mb-6">
        <img src="/logo.png" alt="Logo" className="w-24 mx-auto" />
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center w-full px-4 py-2 rounded-lg text-left hover:bg-blue-100 transition ${
              activeTab === item.id ? 'bg-blue-100 text-blue-600 font-semibold' : ''
            }`}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
