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
    <div className="self-stretch flex min-w-60 items-center gap-5 justify-center my-auto">
      <div className="self-stretch flex min-w-60 items-center gap-1 my-auto">
        <button className="self-stretch flex min-h-[30px] items-center gap-1 justify-center w-[30px] my-auto p-[7px] rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/12d5836f7bd8e79cc1cab294437637813b1bbf06?placeholderIfAbsent=true"
            alt="Previous"
            className="aspect-[1] object-contain w-4 self-stretch my-auto"
          />
        </button>
        {pageNumbers.map((pageNum, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(pageNum)}
            className={`self-stretch min-h-[30px] gap-8 text-sm font-normal whitespace-nowrap tracking-[-0.7px] leading-[1.3] w-[30px] my-auto px-2.5 rounded-[10px] transition-colors ${
              currentPage === pageNum
                ? 'bg-[rgba(255,255,255,0.09)] border text-white border-[rgba(255,255,255,0.06)] border-solid'
                : 'text-[rgba(133,134,136,1)] hover:bg-[rgba(255,255,255,0.05)]'
            }`}
          >
            {pageNum}
          </button>
        ))}
        <button className="bg-[rgba(230,243,255,0.14)] self-stretch flex min-h-[30px] items-center gap-2 justify-center w-[30px] h-[30px] my-auto px-[7px] rounded-[10px] hover:bg-[rgba(230,243,255,0.2)] transition-colors">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5720ff0c139ee4cc3f304a98baaafe4ffde4a238?placeholderIfAbsent=true"
            alt="Next"
            className="aspect-[1] object-contain w-4 self-stretch my-auto"
          />
        </button>
      </div>
      <div className="text-[rgba(133,134,136,1)] text-sm font-normal leading-[1.3] tracking-[-0.7px] self-stretch my-auto">
        <span className="text-white">10</span>
        <span> of 180</span>
      </div>
    </div>
  );

  return (
    <section className={`flex w-full flex-col items-stretch justify-center px-5 py-8 border-[rgba(21,21,21,1)] border-b max-md:max-w-full ${className}`}>
      <div className="flex w-full items-center gap-5 flex-wrap max-md:max-w-full">
        <h2 className="text-white text-[32px] font-medium leading-none self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          Leads List
        </h2>
        <Pagination />
      </div>
      <div className="w-full mt-5 max-md:max-w-full">
        <div className="flex w-full items-center gap-8 text-sm text-[rgba(139,139,139,1)] font-normal leading-none flex-wrap pl-[18px] pr-2 py-2.5 rounded-[10px] max-md:max-w-full">
          <button
            onClick={() => handleSort('date')}
            className="self-stretch flex items-center gap-1 whitespace-nowrap justify-center grow shrink w-16 my-auto hover:text-white transition-colors"
          >
            <div className="self-stretch flex w-full items-center gap-1 flex-1 shrink basis-[0%] my-auto">
              <div className="self-stretch my-auto">Datum</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a3bfbc83db9586533dc2f0faa7cac8cdcd0689f?placeholderIfAbsent=true"
                alt="Sort"
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              />
            </div>
          </button>
          <div className="self-stretch grow shrink w-[104px] my-auto">Name</div>
          <div className="self-stretch grow shrink w-[184px] my-auto">
            <a href="mailto:florianhamphoff@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Email
            </a>
          </div>
          <div className="self-stretch grow shrink w-16 my-auto">Quelle</div>
          <div className="self-stretch grow shrink w-16 my-auto">Medium</div>
          <div className="self-stretch grow shrink w-[104px] my-auto">Kampagne</div>
          <div className="self-stretch grow shrink w-[104px] my-auto">UTM Source</div>
          <div className="self-stretch grow shrink w-[104px] my-auto">UTM Medium</div>
        </div>
        <div className="bg-[rgba(255,255,255,0.09)] border w-full mt-1 p-2 rounded-[10px] border-[rgba(255,255,255,0.06)] border-solid max-md:max-w-full">
          {leads.map((lead, index) => (
            <div
              key={index}
              className={`flex w-full items-center gap-8 text-sm text-white font-semibold leading-none flex-wrap pl-2.5 py-2.5 rounded-[10px] max-md:max-w-full hover:bg-[rgba(255,255,255,0.05)] transition-colors ${
                index > 0 ? 'bg-[rgba(255,255,255,0.09)] border mt-2 border-[rgba(255,255,255,0.06)] border-solid' : ''
              }`}
            >
              <div className="self-stretch grow shrink w-16 my-auto">{lead.date}</div>
              <div className="self-stretch grow shrink w-[104px] my-auto">{lead.name}</div>
              <div className="self-stretch grow shrink w-[184px] my-auto">
                <a href={`mailto:${lead.email}`} className="hover:text-blue-400 transition-colors">
                  {lead.email}
                </a>
              </div>
              <div className="self-stretch grow shrink w-16 my-auto">{lead.source}</div>
              <div className="self-stretch grow shrink w-16 my-auto">{lead.medium}</div>
              <div className={`grow shrink w-[104px] my-auto ${lead.campaign.length > 15 ? 'leading-[14px]' : 'self-stretch'}`}>
                {lead.campaign}
              </div>
              <div className="self-stretch grow shrink w-[104px] my-auto">{lead.utmSource}</div>
              <div className="self-stretch grow shrink w-[104px] my-auto">{lead.utmMedium}</div>
            </div>
          ))}
          <div className="bg-black flex w-full flex-col justify-center mt-2 px-0.5 py-[3px] rounded-[30px] max-md:max-w-full max-md:pr-5">
            <div className="bg-[rgba(32,34,36,1)] flex w-[25px] shrink-0 h-1.5 rounded-[10px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
