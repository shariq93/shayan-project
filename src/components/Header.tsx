import React, { useState } from 'react';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [dateRange, setDateRange] = useState("1 April 2025 - 25 April 2025");
  const [campaign, setCampaign] = useState("Kampagne auswählen");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <header className={`flex w-full gap-3 flex-wrap px-5 py-[19px] border-[rgba(21,21,21,1)] border-b max-md:max-w-full ${className}`}>
      <div className="flex min-w-60 items-center gap-3 text-sm text-white font-normal leading-none flex-wrap flex-1 shrink basis-3.5 max-md:max-w-full">
        <div className="bg-[rgba(255,255,255,0.09)] border self-stretch flex items-center justify-between w-60 my-auto p-2.5 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid cursor-pointer">
          <div className="self-stretch flex items-center gap-2 flex-1 shrink basis-[0%] my-auto">
            <div className="self-stretch my-auto">
              1 April 2025
            </div>
            <div className="self-stretch my-auto">
              -
            </div>
            <div className="self-stretch my-auto">
              25 April 2025
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/93012474ebd7df59d17e8b1cd4db64b66dff5b4a?placeholderIfAbsent=true"
            alt="Calendar"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          />
        </div>
        <div className="bg-[rgba(255,255,255,0.09)] border self-stretch flex items-center gap-[34px] justify-between w-[200px] my-auto p-2.5 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid cursor-pointer">
          <div className="self-stretch my-auto">
            Kampagne auswählen
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ac093d29b2f622c5d05ad5c42ba377f9131daec?placeholderIfAbsent=true"
            alt="Dropdown"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          />
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.09)] border flex min-h-9 items-center gap-[40px_100px] justify-between w-[200px] pl-2.5 pr-1 py-1 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid cursor-pointer">
        <div className="text-white text-sm font-normal leading-none self-stretch my-auto">
          Filters
        </div>
        <div className="bg-[rgba(230,243,255,0.14)] self-stretch flex min-h-7 items-center gap-2 justify-center w-7 h-7 my-auto px-1.5 rounded-[7px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7afa7f224bb8f246cefb6d992cb23d64c11e39b5?placeholderIfAbsent=true"
            alt="Filter"
            className="aspect-[1] object-contain w-4 self-stretch my-auto"
          />
        </div>
      </div>
    </header>
  );
};
