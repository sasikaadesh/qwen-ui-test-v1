import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import CreditCard from './CreditCard';
import RecentTransactions from './RecentTransactions';
import WeeklyActivityChart from './WeeklyActivityChart';
import ExpenseStatisticsChart from './ExpenseStatisticsChart';
import QuickTransfer from './QuickTransfer';
import BalanceHistoryChart from './BalanceHistoryChart';

const DashboardView = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">My Cards</h2>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <CreditCard 
                    cardType="primary" 
                    balance="$5,756" 
                    cardHolder="Eddy Cusuma" 
                    validThru="12/22" 
                    cardNumber="3778 **** **** 1234" 
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <CreditCard 
                    cardType="secondary" 
                    balance="$5,756" 
                    cardHolder="Eddy Cusuma" 
                    validThru="12/22" 
                    cardNumber="3778 **** **** 1234" 
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <RecentTransactions />
            </div>
            <div className="col-span-12 md:col-span-6">
              <WeeklyActivityChart />
            </div>
            <div className="col-span-12 md:col-span-6">
              <ExpenseStatisticsChart />
            </div>
            <div className="col-span-12 md:col-span-6">
              <QuickTransfer />
            </div>
            <div className="col-span-12 md:col-span-6">
              <BalanceHistoryChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;