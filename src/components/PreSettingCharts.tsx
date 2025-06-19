
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartCard: React.FC<{ title: string; data: any; options: any }> = ({ title, data, options }) => {
  return (
    <div className="bg-[rgba(255,255,255,0.09)] border p-5 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white text-sm font-semibold uppercase">{title}</h3>
        <div className="flex gap-2">
          <button className="bg-[rgba(255,255,255,0.09)] px-2 py-1 rounded text-xs text-white">1W</button>
          <button className="bg-[rgba(255,255,255,0.09)] px-2 py-1 rounded text-xs text-white">1M</button>
        </div>
      </div>
      <div className="h-48">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export const PreSettingCharts: React.FC = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255,255,255,0.1)',
        },
        ticks: {
          color: 'rgba(139,139,139,1)',
        },
      },
      y: {
        grid: {
          color: 'rgba(255,255,255,0.1)',
        },
        ticks: {
          color: 'rgba(139,139,139,1)',
        },
      },
    },
    elements: {
      point: {
        radius: 3,
      },
    },
  };

  const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

  const performanceData = {
    labels,
    datasets: [
      {
        data: [65, 45, 70, 55, 80, 60, 75, 50, 85, 70, 90, 65],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
      {
        data: [55, 35, 60, 45, 70, 50, 65, 40, 75, 60, 80, 55],
        borderColor: 'rgb(255, 206, 86)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const workTimeData = {
    labels,
    datasets: [
      {
        data: [45, 60, 35, 70, 50, 85, 40, 75, 55, 90, 65, 80],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
      {
        data: [35, 50, 25, 60, 40, 75, 30, 65, 45, 80, 55, 70],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const activeWorkTimeData = {
    labels,
    datasets: [
      {
        data: [70, 55, 80, 45, 90, 60, 85, 50, 95, 65, 100, 75],
        borderColor: 'rgb(255, 159, 64)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        tension: 0.4,
      },
      {
        data: [60, 45, 70, 35, 80, 50, 75, 40, 85, 55, 90, 65],
        borderColor: 'rgb(153, 102, 255)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="space-y-6 mb-8">
      <ChartCard 
        title="JAHRES VERLAUFE" 
        data={performanceData} 
        options={chartOptions} 
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard 
          title="GESPRÄCHSZEIT" 
          data={workTimeData} 
          options={chartOptions} 
        />
        <ChartCard 
          title="AKTIVE ARBEITSZEIT" 
          data={activeWorkTimeData} 
          options={chartOptions} 
        />
      </div>
    </div>
  );
};
