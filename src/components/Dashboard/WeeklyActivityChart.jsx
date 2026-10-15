import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const WeeklyActivityChart = () => {
  const data = [
    { name: 'Sat', Deposit: 500, Withdraw: 300 },
    { name: 'Sun', Deposit: 400, Withdraw: 150 },
    { name: 'Mon', Deposit: 350, Withdraw: 250 },
    { name: 'Tue', Deposit: 500, Withdraw: 400 },
    { name: 'Wed', Deposit: 200, Withdraw: 300 },
    { name: 'Thu', Deposit: 450, Withdraw: 250 },
    { name: 'Fri', Deposit: 500, Withdraw: 350 }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Weekly Activity</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barSize={20} barGap={10} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" stroke="#718EBF" />
          <YAxis stroke="#718EBF" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Deposit" fill="#2D60FF" />
          <Bar dataKey="Withdraw" fill="#16DBCC" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyActivityChart;