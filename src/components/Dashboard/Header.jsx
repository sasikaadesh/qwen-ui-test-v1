import React from 'react';
import { Search, Settings, Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm rounded-2xl">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for something"
            className="w-64 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
          <Settings size={20} className="text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
          <Bell size={20} className="text-gray-600" />
        </button>
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <User size={20} className="text-gray-600" />
        </div>
      </div>
    </header>
  );
};

export default Header;