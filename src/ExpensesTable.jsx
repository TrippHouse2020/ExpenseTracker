import React, { useState } from 'react';
import { BiDollar } from 'react-icons/bi';

const ExpensesTable = ({ categories, expenseAmounts, handleExpenseAmountChange }) => {
  const colors = ['#FFB900', '#D83B01', '#B50E0E', '#E81123', '#B4009E', '#5C2D91', '#0078D7', '#008272'];
  const defaultAmounts = [0, 0, 0, 0, 0, 0, 0, 0];

  const [formattedExpenseAmounts, setFormattedExpenseAmounts] = useState(expenseAmounts);

  const handleFormattedExpenseAmountChange = (category, value) => {
    const formattedValue = Number(value.replace(/,/g, '')).toLocaleString("en-US");
    setFormattedExpenseAmounts(prevState => ({ ...prevState, [category]: formattedValue }));
    const numericValue = Number(value.replace(/,/g, ''));
    handleExpenseAmountChange(category, numericValue);
  }

  return (
    <div className='h-full bg-[#001D3D] p-10'>
      <table className='w-full h-full'>
        <thead className='bg-[#000814] text-white'>
          <tr>
            <th className='w-1/2 py-2 pl-4 pr-2 text-left font-medium border-b border-gray-300'>
              Expense
            </th>
            <th className='w-1/2 py-2 pl-2 pr-4 text-left font-medium border-b border-gray-300'>
              Expense Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category}>
              <td className='py-2 pl-4 pr-2 border-b text-white'>
                <span className='bullet' style={{ backgroundColor: colors[index % colors.length] }}></span>
                {category}
              </td>
              <td className='py-2 pl-2 pr-4 border-b'>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <BiDollar className='h-5 w-5 text-white' />
                  </div>
                  <input
                    type='text'
                    className='w-full rounded-lg py-2 px-10 bg-[#000814] border-[#3CF4D4] border-2 text-white appearance-none outline-none'
                    value={formattedExpenseAmounts[category] !== undefined ? formattedExpenseAmounts[category] : defaultAmounts[index].toLocaleString("en-US")}
                    onChange={(e) => handleFormattedExpenseAmountChange(category, e.target.value)}
                  />
                </div>
              </td>
            </tr>


          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesTable;
