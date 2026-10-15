import React from 'react';
import { Link } from 'react-router-dom';
import { Home, CreditCard, Users, Settings, Wallet, Book, DollarSign, Menu, Bell, User } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Wallet, label: 'Transactions', path: '/transactions' },
    { icon: Users, label: 'Accounts', path: '/accounts' },
    { icon: CreditCard, label: 'Credit Cards', path: '/credit-cards' },
    { icon: Book, label: 'Loans', path: '/loans' },
    { icon: DollarSign, label: 'Services', path: '/services' },
    { icon: Bell, label: 'My Privileges', path: '/privileges' },
    { icon: Settings, label: 'Setting', path: '/setting' }
  ];

  return (
    <div className="flex flex-col h-full bg-white shadow-lg rounded-2xl p-4">
      <div className="flex items-center mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
          <CreditCard size={20} className="text-white" />
        </div>
        <h1 className="text-xl font-bold text-gray-800">BankDash.</h1>
      </div>
      <div className="flex-1">
        <nav>
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.path} 
                  className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <User size={20} className="text-gray-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">John Doe</p>
            <p className="text-xs text-gray-500">User</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;