import React, { useState } from 'react';
import ExpensesTable from './ExpensesTable';
import ExpensesTotal from './ExpensesTotal';
import ExpensesChart from './ExpensesChart';

const App = () => {
  const categories = [
    'Rent/Mortgage',
    'Utilities',
    'Groceries',
    'Transportation',
    'Entertainment',
    'Personal Care',
    'Insurance',
    'Miscellaneous',
  ];

  const [expenseAmounts, setExpenseAmounts] = useState(
    categories.reduce((obj, category) => ({ ...obj, [category]: '' }), {})
  );

  const handleExpenseAmountChange = (category, amount) => {
    setExpenseAmounts({ ...expenseAmounts, [category]: amount });
  };

  // Calculate total expenses
  const totalExpenses = Object.values(expenseAmounts)
    .filter((amount) => amount !== '')
    .reduce((total, amount) => total + Number(amount), 0);

  return (
    <div className='min-h-screen grid grid-cols-1 sm:grid-cols-2'>
      <div className='bg-gray-50 sm:bg-white'>
        <ExpensesTable
          categories={categories}
          expenseAmounts={expenseAmounts}
          handleExpenseAmountChange={handleExpenseAmountChange}
        />
      </div>
      <div className='bg-gray-50 sm:bg-white'>
        <ExpensesTotal totalExpenses={totalExpenses} />
        <ExpensesChart expenseAmounts={expenseAmounts} />
      </div>
    </div>
  );
};

export default App;