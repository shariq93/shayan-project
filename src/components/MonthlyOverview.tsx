import React, { useState } from 'react';

interface MonthlyOverviewProps {
  className?: string;
}

export const MonthlyOverview: React.FC<MonthlyOverviewProps> = ({ className = '' }) => {
  const [selectedMonth, setSelectedMonth] = useState("April");

  return (
    <section className={`bg-[rgba(255,255,255,0.09)] border flex w-full flex-col overflow-hidden items-stretch justify-center mt-1 p-5 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid max-md:max-w-full ${className}`}>
      <div className="flex w-full items-center gap-8 leading-none flex-wrap max-md:max-w-full">
        <h2 className="text-white text-base font-semibold uppercase self-stretch flex-1 shrink basis-5 my-auto max-md:max-w-full">
          Monatliche Übersicht
        </h2>
        <div className="bg-[rgba(255,255,255,0.09)] border self-stretch flex items-center gap-2 text-sm text-white font-normal whitespace-nowrap w-[120px] my-auto p-2.5 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid cursor-pointer">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/65127d4016735eb9ffbc8ec024ba3739ff168678?placeholderIfAbsent=true"
            alt="Calendar"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          />
          <div className="self-stretch gap-2 flex-1 shrink basis-[0%] my-auto">
            {selectedMonth}
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ac093d29b2f622c5d05ad5c42ba377f9131daec?placeholderIfAbsent=true"
            alt="Dropdown"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          />
        </div>
      </div>
      <div className="w-full mt-8 max-md:max-w-full">
        <div className="flex w-full flex-col items-stretch justify-center rounded-md max-md:max-w-full">
          <div className="text-white text-4xl font-bold leading-none">
            256
          </div>
          <div className="text-[rgba(249,104,0,1)] text-base font-normal">
            Leads ohne Termin
          </div>
        </div>
        <div className="flex w-full flex-col items-stretch justify-center mt-5 rounded-md max-md:max-w-full">
          <div className="text-white text-4xl font-bold leading-none">
            16
          </div>
          <div className="text-[rgba(0,189,249,1)] text-base font-normal">
            Leads zu Abschluss
          </div>
        </div>
      </div>
      <div className="flex w-full items-stretch gap-3 mt-8 max-md:max-w-full">
        <div className="min-w-60 w-full flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="bg-[rgba(255,255,255,0.09)] flex min-h-4 w-full flex-col overflow-hidden justify-between rounded-[10px] max-md:max-w-full">
            <div className="bg-[rgba(249,104,0,1)] flex min-h-4 w-[600px] max-w-full flex-1 rounded-sm" />
          </div>
          <div className="bg-[rgba(255,255,255,0.09)] flex min-h-4 w-full flex-col overflow-hidden justify-between mt-[13px] rounded-[10px] max-md:max-w-full">
            <div className="bg-[rgba(0,189,249,1)] flex min-h-4 w-[30px] flex-1 rounded-sm" />
          </div>
          <div className="flex w-full gap-9 text-sm text-white font-normal whitespace-nowrap leading-none justify-between flex-wrap mt-[13px] max-md:max-w-full">
            <div>0</div>
            <div>25</div>
            <div>50</div>
            <div>75</div>
            <div>100</div>
            <div>125</div>
            <div>150</div>
            <div>175</div>
            <div>200</div>
            <div>225</div>
            <div>250</div>
            <div>275</div>
          </div>
        </div>
      </div>
    </section>
  );
};
