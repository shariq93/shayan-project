import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  percentage: string;
  isPositive: boolean;
  icon: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, percentage, isPositive, icon }) => {
  return (
    <div className="bg-[rgba(255,255,255,0.09)] border self-stretch flex min-h-[126px] flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%] my-auto px-5 py-[21px] rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid">
      <div className="gap-2.5 text-base text-white font-semibold uppercase leading-none">
        {title}
      </div>
      <div className="flex w-full items-center gap-[40px_60px] whitespace-nowrap justify-between mt-8">
        <div className="text-white text-4xl font-bold leading-none self-stretch my-auto">
          {value}
        </div>
        <div className={`self-stretch text-xs font-normal w-[57px] my-auto ${isPositive ? 'text-[rgba(115,186,148,1)]' : 'text-[rgba(186,115,115,1)]'}`}>
          <div className="relative w-full max-w-[57px]">
            <div className="bg-[rgba(0,0,0,0.4)] absolute z-0 flex min-h-[5px] w-[31px] bottom-[-3px] h-[5px] rounded-[50%] right-[13px]" />
            <div className={`border z-0 flex w-full items-center justify-center p-1 rounded-md border-solid ${
              isPositive 
                ? 'bg-[rgba(38,56,48,1)] border-[rgba(47,66,58,1)]' 
                : 'bg-[rgba(56,38,38,1)] border-[rgba(66,47,47,1)]'
            }`}>
              <img
                src={icon}
                alt="Trend"
                className="aspect-[1] object-contain w-[15px] self-stretch shrink-0 my-auto"
              />
              <div className="self-stretch my-auto">
                {percentage}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface StatsCardsProps {
  className?: string;
}

export const StatsCards: React.FC<StatsCardsProps> = ({ className = '' }) => {
  const stats = [
    {
      title: "Leads ohne Termin",
      value: "256",
      percentage: "10.5%",
      isPositive: false,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/11b5dec391f5f99bd322cd60ae81b2459bc5a260?placeholderIfAbsent=true"
    },
    {
      title: "Leads mit Termin",
      value: "164",
      percentage: "203.7%",
      isPositive: true,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/732177d1a9221220b4e305e1a0357acdae8b2161?placeholderIfAbsent=true"
    },
    {
      title: "Leads insgesamt",
      value: "420",
      percentage: "23.5%",
      isPositive: true,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5740c49e25e04dc1f7355780a9bf3593886bdb45?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className={`flex w-full items-center gap-1 flex-wrap max-md:max-w-full ${className}`}>
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          percentage={stat.percentage}
          isPositive={stat.isPositive}
          icon={stat.icon}
        />
      ))}
    </section>
  );
};
