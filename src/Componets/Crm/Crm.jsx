import React, { useState } from 'react';
import Sidebar from '../components/crm/Sidebar';
import Dashboard from '../components/crm/Dashboard';
import InfoPortal from '../components/crm/InfoPortal';
import Employees from '../components/crm/Employees';
import Messenger from '../components/crm/Messenger';

const Crm = () => {
  const [activeTab, setActiveTab] = useState('employees');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'info':
        return <InfoPortal />;
      case 'employees':
        return <Employees />;
      case 'messenger':
        return <Messenger />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-[#f6fbff]">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 p-6 overflow-y-auto">{renderContent()}</div>
    </div>
  );
};

export default Crm;
