
import React, { useState } from 'react';

interface Lead {
  date: string;
  name: string;
  email: string;
  source: string;
  medium: string;
  campaign: string;
  utmSource: string;
  utmMedium: string;
}

interface LeadsListProps {
  className?: string;
}

export const LeadsList: React.FC<LeadsListProps> = ({ className = '' }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<keyof Lead | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const leads: Lead[] = [
    {
      date: "4 Apr 2025",
      name: "Florian Hamphoff",
      email: "florianhamphoff@gmail.com",
      source: "Ads",
      medium: "Meta",
      campaign: "Facebook Ads",
      utmSource: "-",
      utmMedium: "-"
    },
    {
      date: "5 Apr 2025",
      name: "Sophie Martinez",
      email: "sophiemartinez@gmail.com",
      source: "Marketing",
      medium: "Google",
      campaign: "Search Ads",
      utmSource: "-",
      utmMedium: "-"
    },
    {
      date: "6 Apr 2025",
      name: "Liam O'Connor",
      email: "liamoconnor@gmail.com",
      source: "Social Media",
      medium: "Twitter",
      campaign: "Promoted Tweets",
      utmSource: "-",
      utmMedium: "-"
    },
    {
      date: "7 Apr 2025",
      name: "Emma Thompson",
      email: "emmathompson@gmail.com",
      source: "Content",
      medium: "LinkedIn",
      campaign: "Sponsored Content",
      utmSource: "-",
      utmMedium: "-"
    },
    {
      date: "8 Apr 2025",
      name: "Noah Williams",
      email: "noahwilliams@gmail.com",
      source: "SEO",
      medium: "Bing",
      campaign: "Bing Ads",
      utmSource: "-",
      utmMedium: "-"
    },
    {
      date: "9 Apr 2025",
      name: "Olivia Brown",
      email: "oliviabrown@gmail.com",
      source: "Email",
      medium: "Mailchimp",
      campaign: "Newsletter Campaign",
      utmSource: "-",
      utmMedium: "-"
    },
    {
      date: "10 Apr 2025",
      name: "James Johnson",
      email: "jamesjohnson@gmail.com",
      source: "Video",
      medium: "YouTube",
      campaign: "Video Ads",
      utmSource: "-",
      utmMedium: "-"
    },
    {
      date: "11 Apr 2025",
      name: "Ava Davis",
      email: "avadavis@gmail.com",
      source: "Influencer",
      medium: "Instagram",
      campaign: "Influencer Partnerships",
      utmSource: "-",
      utmMedium: "-"
    },
    {
      date: "12 Apr 2025",
      name: "Ethan Clark",
      email: "ethanclark@gmail.com",
      source: "Affiliate",
      medium: "Amazon",
      campaign: "Affiliate Marketing",
      utmSource: "-",
      utmMedium: "-"
    },
    {
      date: "13 Apr 2025",
      name: "Mia Wilson",
      email: "miawilson@gmail.com",
      source: "Analytics",
      medium: "HubSpot",
      campaign: "Performance Tracking",
      utmSource: "-",
      utmMedium: "-"
    }
  ];

  const pageNumbers = [1, 2, 3, 10, 12, 15, 18];

  const handleSort = (field: keyof Lead) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const Pagination = () => (
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 justify-center">
      <div className="flex items-center gap-1">
        <button className="flex items-center justify-center w-[30px] h-[30px] p-[7px] rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/12d5836f7bd8e79cc1cab294437637813b1bbf06?placeholderIfAbsent=true"
            alt="Previous"
            className="aspect-[1] object-contain w-4"
          />
        </button>
        <div className="flex flex-wrap gap-1">
          {pageNumbers.map((pageNum, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(pageNum)}
              className={`min-h-[30px] w-[30px] text-xs sm:text-sm font-normal rounded-[10px] transition-colors ${
                currentPage === pageNum
                  ? 'bg-[rgba(255,255,255,0.09)] border text-white border-[rgba(255,255,255,0.06)] border-solid'
                  : 'text-[rgba(133,134,136,1)] hover:bg-[rgba(255,255,255,0.05)]'
              }`}
            >
              {pageNum}
            </button>
          ))}
        </div>
        <button className="bg-[rgba(230,243,255,0.14)] flex items-center justify-center w-[30px] h-[30px] rounded-[10px] hover:bg-[rgba(230,243,255,0.2)] transition-colors">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5720ff0c139ee4cc3f304a98baaafe4ffde4a238?placeholderIfAbsent=true"
            alt="Next"
            className="aspect-[1] object-contain w-4"
          />
        </button>
      </div>
      <div className="text-[rgba(133,134,136,1)] text-sm font-normal">
        <span className="text-white">10</span>
        <span> of 180</span>
      </div>
    </div>
  );

  return (
    <section className={`flex w-full flex-col items-stretch justify-center px-3 sm:px-5 py-6 sm:py-8 border-[rgba(21,21,21,1)] border-b ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 mb-5">
        <h2 className="text-white text-2xl sm:text-[32px] font-medium leading-none flex-1">
          Leads List
        </h2>
        <div className="w-full sm:w-auto">
          <Pagination />
        </div>
      </div>
      
      {/* Mobile Card View */}
      <div className="block sm:hidden space-y-3">
        {leads.map((lead, index) => (
          <div key={index} className="bg-[rgba(255,255,255,0.09)] border p-4 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid">
            <div className="text-white font-semibold text-lg mb-2">{lead.name}</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[rgba(139,139,139,1)]">Date:</span>
                <span className="text-white">{lead.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[rgba(139,139,139,1)]">Email:</span>
                <a href={`mailto:${lead.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                  {lead.email}
                </a>
              </div>
              <div className="flex justify-between">
                <span className="text-[rgba(139,139,139,1)]">Source:</span>
                <span className="text-white">{lead.source}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[rgba(139,139,139,1)]">Medium:</span>
                <span className="text-white">{lead.medium}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[rgba(139,139,139,1)]">Campaign:</span>
                <span className="text-white">{lead.campaign}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden sm:block w-full">
        {/* Table Header */}
        <div className="flex w-full items-center gap-4 lg:gap-8 text-sm text-[rgba(139,139,139,1)] font-normal leading-none flex-wrap pl-[18px] pr-2 py-2.5 rounded-[10px]">
          <button
            onClick={() => handleSort('date')}
            className="flex items-center gap-1 whitespace-nowrap min-w-0 flex-1 hover:text-white transition-colors"
          >
            <div className="truncate">Datum</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a3bfbc83db9586533dc2f0faa7cac8cdcd0689f?placeholderIfAbsent=true"
              alt="Sort"
              className="aspect-[1] object-contain w-4 shrink-0"
            />
          </button>
          <div className="min-w-0 flex-1 truncate">Name</div>
          <div className="min-w-0 flex-1 truncate">Email</div>
          <div className="min-w-0 flex-1 truncate">Quelle</div>
          <div className="min-w-0 flex-1 truncate">Medium</div>
          <div className="min-w-0 flex-1 truncate">Kampagne</div>
          <div className="min-w-0 flex-1 truncate lg:block hidden">UTM Source</div>
          <div className="min-w-0 flex-1 truncate lg:block hidden">UTM Medium</div>
        </div>
        
        {/* Table Body */}
        <div className="bg-[rgba(255,255,255,0.09)] border w-full mt-1 p-2 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid">
          {leads.map((lead, index) => (
            <div
              key={index}
              className={`flex w-full items-center gap-4 lg:gap-8 text-sm text-white font-semibold leading-none flex-wrap pl-2.5 py-2.5 rounded-[10px] hover:bg-[rgba(255,255,255,0.05)] transition-colors ${
                index > 0 ? 'bg-[rgba(255,255,255,0.09)] border mt-2 border-[rgba(255,255,255,0.06)] border-solid' : ''
              }`}
            >
              <div className="min-w-0 flex-1 truncate">{lead.date}</div>
              <div className="min-w-0 flex-1 truncate">{lead.name}</div>
              <div className="min-w-0 flex-1 truncate">
                <a href={`mailto:${lead.email}`} className="hover:text-blue-400 transition-colors">
                  {lead.email}
                </a>
              </div>
              <div className="min-w-0 flex-1 truncate">{lead.source}</div>
              <div className="min-w-0 flex-1 truncate">{lead.medium}</div>
              <div className="min-w-0 flex-1 truncate">{lead.campaign}</div>
              <div className="min-w-0 flex-1 truncate lg:block hidden">{lead.utmSource}</div>
              <div className="min-w-0 flex-1 truncate lg:block hidden">{lead.utmMedium}</div>
            </div>
          ))}
          <div className="bg-black flex w-full flex-col justify-center mt-2 px-0.5 py-[3px] rounded-[30px]">
            <div className="bg-[rgba(32,34,36,1)] flex w-[25px] shrink-0 h-1.5 rounded-[10px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

