import React from 'react';
import { Clock, ArrowDown, ArrowUp } from 'lucide-react';

const RecentTransactions = () => {
  const transactions = [
    { id: 1, type: 'deposit', amount: 850, from: 'my Card', date: '28 January 2021' },
    { id: 2, type: 'deposit', amount: 2500, from: 'Paypal', date: '25 January 2021' },
    { id: 3, type: 'deposit', amount: 5400, from: 'Jemi Wilson', date: '21 January 2021' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Recent Transaction</h2>
        <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200">See All</button>
      </div>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              {transaction.type === 'deposit' ? (
                <ArrowUp size={24} className="text-green-500" />
              ) : (
                <ArrowDown size={24} className="text-red-500" />
              )}
            </div>
            <div>
              <p className="font-medium text-gray-800">{transaction.from}</p>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
            <div className="ml-auto">
              <p className={`font-bold ${transaction.type === 'deposit' ? 'text-green-500' : 'text-red-500'}`}>${transaction.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;