
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { Search, Menu } from "lucide-react";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [dateRange, setDateRange] = useState("1 April 2025 - 25 April 2025");
  const [campaign, setCampaign] = useState("Kampagne auswählen");
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const campaigns = [
    "Kampagne Name",
    "Kampagne Name",
    "Kampagne Name", 
    "Kampagne Name",
    "Kampagne Name"
  ];

  const filteredCampaigns = campaigns.filter(camp => 
    camp.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCampaignSelect = (selectedCampaign: string) => {
    setCampaign(selectedCampaign);
    setSearchTerm("");
    setIsDropdownOpen(false);
  };

  return (
    <header className={`flex w-full gap-3 flex-col sm:flex-row px-3 sm:px-5 py-4 sm:py-[19px] border-[rgba(21,21,21,1)] border-b ${className}`}>
      {/* Mobile menu button */}
      <div className="flex sm:hidden justify-between items-center w-full mb-3">
        <h1 className="text-white text-lg font-medium">Dashboard</h1>
        <button className="text-white p-2">
          <Menu className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 text-sm text-white font-normal leading-none flex-1">
        {/* Date Range Picker */}
        <div className="bg-[rgba(255,255,255,0.09)] border flex items-center justify-between w-full sm:w-60 p-2.5 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid cursor-pointer">
          <div className="flex items-center gap-2 flex-1 text-xs sm:text-sm">
            <div className="hidden sm:block">1 April 2025</div>
            <div className="sm:hidden">1 Apr 2025</div>
            <div>-</div>
            <div className="hidden sm:block">25 April 2025</div>
            <div className="sm:hidden">25 Apr 2025</div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/93012474ebd7df59d17e8b1cd4db64b66dff5b4a?placeholderIfAbsent=true"
            alt="Calendar"
            className="aspect-[1] object-contain w-4 shrink-0"
          />
        </div>
        
        {/* Campaign Dropdown */}
        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <div className="bg-[rgba(255,255,255,0.09)] border flex items-center justify-between w-full sm:w-[200px] p-2.5 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid cursor-pointer">
              <div className="truncate text-xs sm:text-sm">
                {campaign}
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ac093d29b2f622c5d05ad5c42ba377f9131daec?placeholderIfAbsent=true"
                alt="Dropdown"
                className="aspect-[1] object-contain w-4 shrink-0 ml-2"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="w-[280px] sm:w-[300px] bg-[rgba(32,34,36,1)] border border-[rgba(255,255,255,0.06)] p-4"
            align="start"
          >
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-[rgba(255,255,255,0.09)] border-[rgba(255,255,255,0.06)] text-white placeholder:text-gray-400 pl-10"
              />
            </div>
            <div className="space-y-1 max-h-48 overflow-y-auto">
              {filteredCampaigns.map((camp, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => handleCampaignSelect(camp)}
                  className="text-white hover:bg-[rgba(255,255,255,0.1)] cursor-pointer px-3 py-2 rounded-md"
                >
                  {camp}
                </DropdownMenuItem>
              ))}
              {filteredCampaigns.length === 0 && searchTerm && (
                <div className="text-gray-400 px-3 py-2">No campaigns found</div>
              )}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      {/* Filters */}
      <div className="bg-[rgba(255,255,255,0.09)] border flex items-center justify-between w-full sm:w-[200px] pl-2.5 pr-1 py-1 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid cursor-pointer">
        <div className="text-white text-sm font-normal leading-none">
          Filters
        </div>
        <div className="bg-[rgba(230,243,255,0.14)] flex items-center justify-center w-7 h-7 px-1.5 rounded-[7px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7afa7f224bb8f246cefb6d992cb23d64c11e39b5?placeholderIfAbsent=true"
            alt="Filter"
            className="aspect-[1] object-contain w-4"
          />
        </div>
      </div>
    </header>
  );
};

