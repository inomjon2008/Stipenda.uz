import React from 'react';

const Employees = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Employees (28)</h2>
      <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="avatar"
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h3 className="font-semibold">Usmonov Inomjon</h3>
            <p className="text-sm text-gray-500">inimjonu380@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-10 text-sm text-gray-600">
          <div><strong>Gender:</strong> Male</div>
          <div><strong>Birthday:</strong> Oct 16, 2008</div>
          <div><strong>Full age:</strong> 16</div>
          <div><strong>Position:</strong> Frontend Dev <span className="bg-gray-200 text-xs px-2 py-0.5 rounded">Middle</span></div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
