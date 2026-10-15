import React from 'react';
import { ArrowRight, Send } from 'lucide-react';

const QuickTransfer = () => {
  const users = [
    { name: 'Livia Bator', role: 'CEO', avatar: 'https://via.placeholder.com/40' },
    { name: 'Randy Press', role: 'Director', avatar: 'https://via.placeholder.com/40' },
    { name: 'Workman', role: 'Designer', avatar: 'https://via.placeholder.com/40' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Transfer</h2>
      <div className="flex items-center space-x-4 mb-4">
        {users.map((user, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mb-2" />
            <p className="text-sm font-medium text-gray-800">{user.name}</p>
            <p className="text-xs text-gray-500">{user.role}</p>
          </div>
        ))}
        <div className="flex items-center">
          <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Write Amount"
          className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
          <Send size={20} />
          <span>Send</span>
        </button>
      </div>
    </div>
  );
};

export default QuickTransfer;