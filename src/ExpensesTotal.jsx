import React from 'react';

const ExpensesTotal = ({ totalExpenses }) => {
  return (
    <div className='bg-[#001D3D] h-[30vh] flex items-center justify-center text-center'>
      <h2 className="text-white text-4xl font-bold">
        Expenses Total
        <span className="block text-3xl font-normal">
          {totalExpenses}
        </span>
      </h2>
    </div>
  );
};

export default ExpensesTotal;
