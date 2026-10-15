import React from 'react';
import { CreditCard as CreditCardIcon } from 'lucide-react';

const CreditCard = ({ cardType = 'primary', balance, cardHolder, validThru, cardNumber }) => {
  const primaryCardStyle = {
    background: 'linear-gradient(135deg, #2D60FF 0%, #16DBCC 100%)',
    color: '#FFFFFF',
    border: '1px solid #16DBCC',
    borderRadius: '1rem',
    padding: '1.5rem',
    margin: '1rem 0',
    boxShadow: '0 4px 10px rgba(45, 96, 255, 0.2)' 
  };

  const secondaryCardStyle = {
    background: '#F5F7FA',
    color: '#16DBCC',
    border: '1px solid #16DBCC',
    borderRadius: '1rem',
    padding: '1.5rem',
    margin: '1rem 0',
    boxShadow: '0 4px 10px rgba(22, 219, 204, 0.1)' 
  };

  const cardStyle = cardType === 'primary' ? primaryCardStyle : secondaryCardStyle;

  return (
    <div className="flex flex-col" style={cardStyle}>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm font-medium">Balance</p>
          <p className="text-2xl font-bold">${balance}</p>
        </div>
        <CreditCardIcon size={32} />
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm font-medium">Card Holder</p>
          <p className="text-sm">{cardHolder}</p>
        </div>
        <div>
          <p className="text-sm font-medium">Valid Thru</p>
          <p className="text-sm">{validThru}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm font-medium">{cardNumber}</p>
        <div className="flex space-x-1">
          <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
          <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;