import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const BalanceHistoryChart = () => {
  const data = [
    { month: 'Jul', balance: 200 },
    { month: 'Aug', balance: 400 },
    { month: 'Sep', balance: 300 },
    { month: 'Oct', balance: 700 },
    { month: 'Nov', balance: 200 },
    { month: 'Dec', balance: 600 },
    { month: 'Jan', balance: 700 }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Balance History</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="month" stroke="#718EBF" />
          <YAxis stroke="#718EBF" />
          <Tooltip />
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2D60FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#2D60FF" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="balance" stroke="#2D60FF" fill="url(#colorBalance)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceHistoryChart;