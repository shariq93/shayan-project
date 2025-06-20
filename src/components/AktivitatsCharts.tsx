
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

interface ChartCardProps {
  title: string;
  data: any;
  options: any;
  className?: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, data, options, className = "" }) => {
  return (
    <div className={`bg-[rgba(255,255,255,0.09)] border p-5 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white text-sm font-semibold uppercase">{title}</h3>
        <div className="flex gap-2">
          <span className="text-[rgba(139,139,139,1)] text-xs">Closer Academy</span>
          <span className="text-[rgba(139,139,139,1)] text-xs">Beratungsgespräch</span>
          <button className="bg-[rgba(255,255,255,0.09)] px-2 py-1 rounded text-xs text-white">Filters</button>
          <button className="bg-[rgba(255,255,255,0.09)] p-1 rounded text-xs text-white">⋮</button>
          <button className="bg-[rgba(255,255,255,0.09)] p-1 rounded text-xs text-white">↗</button>
        </div>
      </div>
      <div className="h-48">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export const AktivitatsCharts: React.FC = () => {
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
          font: {
            size: 10,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(255,255,255,0.1)',
        },
        ticks: {
          color: 'rgba(139,139,139,1)',
          font: {
            size: 10,
          },
        },
      },
    },
    elements: {
      point: {
        radius: 2,
      },
    },
  };

  const labels = ['27', '28', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'];

  // ANNAHLVERSUCHE data
  const annahlversucheData = {
    labels,
    datasets: [
      {
        data: [20, 25, 18, 30, 22, 35, 28, 40, 32, 38, 45, 35, 42, 38, 48, 45, 52, 48, 55, 50, 58, 52, 60, 55, 62],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        tension: 0.4,
        borderWidth: 2,
      },
      {
        data: [15, 20, 15, 25, 18, 28, 22, 32, 25, 30, 35, 28, 35, 30, 38, 35, 42, 38, 45, 40, 48, 42, 50, 45, 52],
        borderColor: 'rgb(255, 206, 86)',
        backgroundColor: 'rgba(255, 206, 86, 0.1)',
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  // GESPRÄCHSZEIT data
  const gespraechszeitData = {
    labels,
    datasets: [
      {
        data: [30, 35, 25, 40, 32, 45, 38, 50, 42, 48, 55, 45, 52, 48, 58, 55, 62, 58, 65, 60, 68, 62, 70, 65, 72],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
        tension: 0.4,
        borderWidth: 2,
      },
      {
        data: [25, 30, 22, 35, 28, 40, 32, 45, 38, 42, 48, 40, 45, 42, 50, 48, 55, 50, 58, 52, 60, 55, 62, 58, 65],
        borderColor: 'rgb(255, 159, 64)',
        backgroundColor: 'rgba(255, 159, 64, 0.1)',
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  // AKTIVE ARBEITSZEIT data
  const aktiveArbeitszeitData = {
    labels,
    datasets: [
      {
        data: [40, 45, 35, 50, 42, 55, 48, 60, 52, 58, 65, 55, 62, 58, 68, 65, 72, 68, 75, 70, 78, 72, 80, 75, 82],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.1)',
        tension: 0.4,
        borderWidth: 2,
      },
      {
        data: [35, 40, 30, 45, 38, 50, 42, 55, 48, 52, 58, 50, 55, 52, 60, 58, 65, 60, 68, 62, 70, 65, 72, 68, 75],
        borderColor: 'rgb(153, 102, 255)',
        backgroundColor: 'rgba(153, 102, 255, 0.1)',
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  // GESPRÄCHE > 2 MIN data
  const gespraeche2MinData = {
    labels,
    datasets: [
      {
        data: [25, 30, 20, 35, 28, 40, 32, 45, 38, 42, 48, 40, 45, 42, 50, 48, 55, 50, 58, 52, 60, 55, 62, 58, 65],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        tension: 0.4,
        borderWidth: 2,
      },
      {
        data: [20, 25, 18, 30, 22, 35, 28, 40, 32, 38, 42, 35, 40, 38, 45, 42, 48, 45, 52, 48, 55, 50, 58, 52, 60],
        borderColor: 'rgb(255, 206, 86)',
        backgroundColor: 'rgba(255, 206, 86, 0.1)',
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  // ABGEBROCHENE ANRUFE data
  const abgebrocheneAnrufeData = {
    labels,
    datasets: [
      {
        data: [35, 40, 30, 45, 38, 50, 42, 55, 48, 52, 58, 50, 55, 52, 60, 58, 65, 60, 68, 62, 70, 65, 72, 68, 75],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
        tension: 0.4,
        borderWidth: 2,
      },
      {
        data: [30, 35, 25, 40, 32, 45, 38, 50, 42, 48, 52, 45, 50, 48, 55, 52, 60, 55, 62, 58, 65, 60, 68, 62, 70],
        borderColor: 'rgb(255, 159, 64)',
        backgroundColor: 'rgba(255, 159, 64, 0.1)',
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Top large chart */}
      <ChartCard 
        title="ANNAHLVERSUCHE" 
        data={annahlversucheData} 
        options={chartOptions}
        className="h-80"
      />
      
      {/* Middle row - 2 charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard 
          title="GESPRÄCHSZEIT" 
          data={gespraechszeitData} 
          options={chartOptions} 
        />
        <ChartCard 
          title="AKTIVE ARBEITSZEIT" 
          data={aktiveArbeitszeitData} 
          options={chartOptions} 
        />
      </div>

      {/* Bottom row - 2 charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard 
          title="GESPRÄCHE > 2 MIN" 
          data={gespraeche2MinData} 
          options={chartOptions} 
        />
        <ChartCard 
          title="ABGEBROCHENE ANRUFE" 
          data={abgebrocheneAnrufeData} 
          options={chartOptions} 
        />
      </div>
    </div>
  );
};
