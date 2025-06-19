
import React from 'react';

interface TableRow {
  name: string;
  source: string;
  medium: string;
  campaign: string;
}

export const PreSettingTable: React.FC = () => {
  const tableData: TableRow[] = [
    { name: "Florian Hamphoff", source: "Ads", medium: "Meta", campaign: "Facebook Ads" },
    { name: "Sophie Martinez", source: "Marketing", medium: "Google", campaign: "Search Ads" },
    { name: "Liam O'Connor", source: "Social Media", medium: "Twitter", campaign: "Promoted Tweets" },
    { name: "Emma Thompson", source: "Content", medium: "LinkedIn", campaign: "Sponsored Content" },
    { name: "Noah Williams", source: "SEO", medium: "Bing", campaign: "Bing Ads" },
    { name: "Olivia Brown", source: "Email", medium: "Mailchimp", campaign: "Newsletter Campaign" },
    { name: "James Johnson", source: "Video", medium: "YouTube", campaign: "Video Ads" },
    { name: "Ava Davis", source: "Influencer", medium: "Instagram", campaign: "Influencer Partnerships" },
    { name: "Ethan Clark", source: "Affiliate", medium: "Amazon", campaign: "Affiliate Marketing" },
    { name: "Mia Wilson", source: "Analytics", medium: "HubSpot", campaign: "Performance Tracking" },
  ];

  return (
    <div className="bg-[rgba(255,255,255,0.09)] border rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid overflow-hidden">
      <div className="flex justify-between items-center p-5 border-b border-[rgba(255,255,255,0.06)]">
        <h3 className="text-white text-xl font-medium">Rangliste</h3>
        <div className="flex gap-2">
          <button className="text-[rgba(139,139,139,1)] text-sm hover:text-white">Anrufaktivitäten</button>
          <button className="text-[rgba(139,139,139,1)] text-sm hover:text-white">Events</button>
          <button className="text-white text-sm">Chatzeitpunkt</button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[rgba(255,255,255,0.06)]">
              <th className="text-left p-4 text-[rgba(139,139,139,1)] text-sm font-normal">Name</th>
              <th className="text-left p-4 text-[rgba(139,139,139,1)] text-sm font-normal">Quelle</th>
              <th className="text-left p-4 text-[rgba(139,139,139,1)] text-sm font-normal">Medium</th>
              <th className="text-left p-4 text-[rgba(139,139,139,1)] text-sm font-normal">Kampagne</th>
              <th className="text-left p-4 text-[rgba(139,139,139,1)] text-sm font-normal">Google Anzeigen</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="border-b border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.05)]">
                <td className="p-4 text-white text-sm">{row.name}</td>
                <td className="p-4 text-white text-sm">{row.source}</td>
                <td className="p-4 text-white text-sm">{row.medium}</td>
                <td className="p-4 text-white text-sm">{row.campaign}</td>
                <td className="p-4 text-[rgba(139,139,139,1)] text-sm">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
