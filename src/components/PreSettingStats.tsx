
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  percentage: string;
  isPositive: boolean;
  category: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, percentage, isPositive, category }) => {
  return (
    <div className="bg-[rgba(255,255,255,0.09)] border flex flex-col p-4 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid">
      <div className="text-[rgba(139,139,139,1)] text-xs font-normal uppercase mb-2">
        {category}
      </div>
      <div className="text-white text-2xl font-bold mb-1">
        {value}
      </div>
      <div className={`text-xs font-normal ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
        {isPositive ? '+' : ''}{percentage}
      </div>
      <div className="text-[rgba(139,139,139,1)] text-xs font-normal mt-1">
        {title}
      </div>
    </div>
  );
};

export const PreSettingStats: React.FC = () => {
  const stats = [
    { category: "EFFICIENCY", title: "TERMIN BUCHUNGEN", value: "6,702", percentage: "2.8%", isPositive: true },
    { category: "EFFICIENCY", title: "PROFIT", value: "510", percentage: "3.8%", isPositive: true },
    { category: "PRESALE SETTINGS", title: "", value: "35", percentage: "10.5%", isPositive: false },
    { category: "GELÖSTE CLOSING", title: "", value: "41", percentage: "7.5%", isPositive: false },
    { category: "ERSTE DURCHZEIT", title: "", value: "7.6%", percentage: "0.8%", isPositive: false },
    { category: "GESAMTDURCHZEIT", title: "", value: "42:48:25", percentage: "1.7%", isPositive: false },
    { category: "GELÖSTE SETTINGS IN %", title: "", value: "6.9%", percentage: "2.1%", isPositive: false },
    { category: "GELÖSTE CLOSINGS IN %", title: "", value: "8.0%", percentage: "1.8%", isPositive: false },
    { category: "ANRUFE BEI SETTING TERMIN", title: "", value: "6.48", percentage: "2.8%", isPositive: true }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          category={stat.category}
          title={stat.title}
          value={stat.value}
          percentage={stat.percentage}
          isPositive={stat.isPositive}
        />
      ))}
    </div>
  );
};
