import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensesChart = ({ expenseAmounts }) => {
  const colors = [
    '#FFB900',
    '#D83B01',
    '#B50E0E',
    '#E81123',
    '#B4009E',
    '#5C2D91',
    '#0078D7',
    '#008272',
  ];

  const generateChartData = (expenseAmounts) => {
    const defaultAmounts = [25, 50, 0, 0, 0, 0, 0, 0];

    const data = {
      labels: [],
      datasets: [
        {
          label: '',
          data: defaultAmounts,
          backgroundColor: colors.slice(0, defaultAmounts.length),
          borderColor: '#ffffff',
          borderWidth: 1,
        },
      ],
    };

    Object.entries(expenseAmounts).forEach(([category, amount], index) => {
      if (amount) {
        data.labels.push(category);
        data.datasets[0].data[index] = amount;
      }
    });

    return data;
  };


  const data = generateChartData(expenseAmounts);

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className='h-[70vh] bg-[#001D3D] justify-center items-center pb-4'>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ExpensesChart;
