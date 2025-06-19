
import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { PreSettingStats } from './PreSettingStats';
import { PreSettingCharts } from './PreSettingCharts';
import { PreSettingTable } from './PreSettingTable';

export const PreSetting: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 lg:ml-0">
          <Header />
          <div className="px-3 sm:px-5 py-6 sm:py-8">
            <div className="leading-none mb-5">
              <div className="text-[rgba(139,139,139,1)] text-sm font-normal">
                👋 Welcome back, [User Name]!
              </div>
              <h1 className="text-white text-2xl sm:text-[32px] font-medium mt-2">
                Pre Setting Performance
              </h1>
            </div>
            <PreSettingStats />
            <PreSettingCharts />
            <PreSettingTable />
          </div>
        </main>
      </div>
    </div>
  );
};
