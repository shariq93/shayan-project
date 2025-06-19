import React from 'react';

interface ChartData {
  label: string;
  value: number;
  color: string;
}

interface SourceChartsProps {
  className?: string;
}

export const SourceCharts: React.FC<SourceChartsProps> = ({ className = '' }) => {
  const singleSourceData: ChartData[] = [
    { label: "Ads", value: 256, color: "rgba(255,147,147,1)" }
  ];

  const multiSourceData: ChartData[] = [
    { label: "Ads", value: 256, color: "rgba(255,147,147,1)" },
    { label: "Affiliate", value: 120, color: "rgba(147,255,233,1)" },
    { label: "SEO", value: 190, color: "rgba(201,255,147,1)" }
  ];

  const yAxisLabels = [275, 250, 225, 200, 175, 150, 125, 100, 75, 50, 25, 0];

  const SingleChart = ({ data }: { data: ChartData[] }) => (
    <div className="bg-[rgba(255,255,255,0.09)] border flex min-w-60 flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%] p-5 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid">
      <h3 className="text-white text-base font-semibold leading-none uppercase">
        Quelle
      </h3>
      <div className="flex w-full items-stretch gap-[13px] mt-5">
        <div className="text-sm text-white font-normal whitespace-nowrap leading-none max-md:hidden">
          {yAxisLabels.map((label, index) => (
            <div key={index} className={index > 0 ? "mt-2" : ""}>
              {label}
            </div>
          ))}
        </div>
        <div className="flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%]">
          <div className="bg-[rgba(255,255,255,0.09)] min-h-64 w-full overflow-hidden rounded-[10px]">
            <div
              className="flex min-h-[231px] w-full rounded-sm"
              style={{ backgroundColor: data[0].color }}
            />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.09)] flex items-center gap-1 text-xs whitespace-nowrap leading-[1.2] mt-5 px-2 py-[5px] rounded-lg"
           style={{ color: data[0].color }}>
        <div className="font-semibold self-stretch my-auto">
          {data[0].value}
        </div>
        <div className="font-normal self-stretch my-auto">
          {data[0].label}
        </div>
      </div>
    </div>
  );

  const MultiChart = ({ data }: { data: ChartData[] }) => (
    <div className="bg-[rgba(255,255,255,0.09)] border flex min-w-60 flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%] p-5 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid">
      <h3 className="text-white text-base font-semibold leading-none uppercase">
        Quelle
      </h3>
      <div className="flex w-full items-stretch gap-[13px] mt-5">
        <div className="text-sm text-white font-normal whitespace-nowrap leading-none max-md:hidden">
          {yAxisLabels.map((label, index) => (
            <div key={index} className={index > 0 ? "mt-2" : ""}>
              {label}
            </div>
          ))}
        </div>
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-stretch justify-center flex-1 shrink basis-[0%]">
            <div className="bg-[rgba(255,255,255,0.09)] min-h-64 w-full overflow-hidden rounded-[10px]">
              <div
                className="flex w-full rounded-sm"
                style={{ 
                  backgroundColor: item.color,
                  minHeight: `${(item.value / 275) * 231}px`
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 text-xs whitespace-nowrap leading-[1.2] mt-5">
        {data.map((item, index) => (
          <div key={index} className="bg-[rgba(255,255,255,0.09)] flex items-center gap-1 px-2 py-[5px] rounded-lg"
               style={{ color: item.color }}>
            <div className="font-semibold self-stretch my-auto">
              {item.value}
            </div>
            <div className="font-normal self-stretch my-auto">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const EmptyChart = () => (
    <div className="bg-[rgba(255,255,255,0.09)] border min-w-60 min-h-[376px] overflow-hidden flex-1 shrink basis-[0%] pt-5 pb-16 px-5 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid">
      <h3 className="text-white text-base font-semibold leading-none uppercase">
        Quelle
      </h3>
      <div className="flex w-full items-stretch gap-[13px] text-white font-normal mt-5">
        <div className="text-sm whitespace-nowrap leading-none max-md:hidden">
          {yAxisLabels.map((label, index) => (
            <div key={index} className={index > 0 ? "mt-2" : ""}>
              {label}
            </div>
          ))}
        </div>
        <div className="flex min-w-60 flex-col items-stretch text-base text-center leading-4 justify-center flex-1 shrink basis-[0%]">
          <div className="flex-1 bg-[rgba(255,255,255,0.09)] min-h-64 w-full overflow-hidden rounded-[10px] flex items-center justify-center">
            No Data
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className={`flex w-full flex-col items-stretch justify-center px-5 py-8 max-md:max-w-full ${className}`}>
      <div className="flex w-full gap-5 flex-wrap max-md:max-w-full">
        <SingleChart data={singleSourceData} />
        <MultiChart data={multiSourceData} />
        <EmptyChart />
      </div>
    </section>
  );
};
