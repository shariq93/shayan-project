
import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { StatsCards } from './StatsCards';
import { MonthlyOverview } from './MonthlyOverview';
import { LeadsList } from './LeadsList';
import { SourceCharts } from './SourceCharts';

interface MetricCardProps {
  title: string;
  value: string;
  percentage: string;
  isPositive: boolean;
  icon: string;
  highlighted?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, percentage, isPositive, icon, highlighted = false }) => {
  return (
    <div className={`bg-[rgba(255,255,255,0.09)] border flex w-full flex-col overflow-hidden items-stretch justify-center flex-1 p-4 sm:p-5 rounded-[10px] border-solid ${
      highlighted 
        ? 'shadow-[0px_0px_15px_rgba(126,186,255,0.4)] border-[rgba(126,186,255,1)]' 
        : 'border-[rgba(255,255,255,0.06)]'
    }`}>
      <div className="gap-2.5 text-sm sm:text-base text-white font-semibold uppercase leading-none">
        {title}
      </div>
      <div className="flex w-full items-center gap-4 sm:gap-[40px_100px] whitespace-nowrap justify-between mt-6 sm:mt-8">
        <div className="text-white text-2xl sm:text-4xl font-bold leading-none">
          {value}
        </div>
        {percentage && (
          <div className={`text-xs font-normal w-[50px] sm:w-[57px] ${isPositive ? 'text-[rgba(115,186,148,1)]' : 'text-[rgba(186,115,115,1)]'}`}>
            <div className="relative w-full">
              <div className="bg-[rgba(0,0,0,0.4)] absolute z-0 flex min-h-[5px] w-[28px] sm:w-[31px] bottom-[-3px] h-[5px] rounded-[50%] right-[11px] sm:right-[13px]" />
              <div className={`border z-0 flex w-full items-center justify-center p-1 rounded-md border-solid ${
                isPositive 
                  ? 'bg-[rgba(38,56,48,1)] border-[rgba(47,66,58,1)]' 
                  : 'bg-[rgba(56,38,38,1)] border-[rgba(66,47,47,1)]'
              }`}>
                <img
                  src={icon}
                  alt="Trend"
                  className="aspect-[1] object-contain w-3 sm:w-[15px] shrink-0"
                />
                <div className="text-xs">
                  {percentage}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const Leads: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 lg:ml-0">
          <Header />
          <div className="flex flex-col lg:flex-row border-[rgba(21,21,21,1)] border-b">
            {/* Main Content */}
            <div className="flex-1 lg:max-w-[60%] px-3 sm:px-5 py-6 sm:py-8 border-[rgba(21,21,21,1)] lg:border-r">
              <div className="leading-none mb-5">
                <div className="text-[rgba(139,139,139,1)] text-sm font-normal">
                  👋 Welcome back, [User Name]!
                </div>
                <h1 className="text-white text-2xl sm:text-[32px] font-medium mt-2">
                  Leads
                </h1>
              </div>
              <div className="space-y-5">
                <StatsCards />
                <MonthlyOverview />
              </div>
            </div>

            {/* Sidebar Metrics */}
            <aside className="flex-1 lg:max-w-[40%] px-3 sm:px-5 py-6 sm:py-8 space-y-4">
              <MetricCard
                title="Leads mit Termin in %"
                value="39.0%"
                percentage=""
                isPositive={true}
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/95834d56be74c573cbea3e48e30bdc01f709be19?placeholderIfAbsent=true"
              />
              <MetricCard
                title="Leads zu Abschluss"
                value="16"
                percentage="203.7%"
                isPositive={true}
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9e8a4b5a9f9e72b59a48273b9b94af7d7700c435?placeholderIfAbsent=true"
              />
              <MetricCard
                title="Leads zu Abschluss in %"
                value="6.2%"
                percentage="23.5%"
                isPositive={true}
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a81aa47759294ca9a922db3a0af1bab4aae35902?placeholderIfAbsent=true"
                highlighted={true}
              />
              <MetricCard
                title="Tage zum Abschluss"
                value="27.5"
                percentage="23.5%"
                isPositive={true}
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9e8a4b5a9f9e72b59a48273b9b94af7d7700c435?placeholderIfAbsent=true"
              />
            </aside>
          </div>
          <LeadsList />
          <SourceCharts />
        </main>
      </div>
    </div>
  );
};

export default Leads;

