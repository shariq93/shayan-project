import React from 'react';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const menuItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/af3d259d4daec789ed14862c4d4eeabc5bb17f28?placeholderIfAbsent=true", label: "Leads", active: true },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ee644caaafd5ea1799ada8e3afc0ec73ae24bcb?placeholderIfAbsent=true", label: "Pre-Setting", active: false },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/deaec98764b663b8a774553f08c304d328680b85?placeholderIfAbsent=true", label: "Aktivität", active: false },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f58e7a913a04dd4b54750b6eb3fbbb7a683f4ee?placeholderIfAbsent=true", label: "Setting", active: false },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d771b4bad6dd3ebfbec9c4cd485a603cc02bfd6?placeholderIfAbsent=true", label: "Closing", active: false },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb3dca346f05e54307c95563bca180a82f682809?placeholderIfAbsent=true", label: "Umsatz", active: false },
  ];

  return (
    <nav className={`w-[16%] max-md:w-full max-md:ml-0 ${className}`}>
      <div className="text-sm text-[rgba(139,139,139,1)] font-normal whitespace-nowrap leading-none pt-[29px] pb-[656px] px-[30px] border-black border-r max-md:pb-[100px] max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/73d4596dfe606673994f99db4bdb6d8410552717?placeholderIfAbsent=true"
          alt="User Avatar"
          className="aspect-[2.28] object-contain w-[73px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[80px]"
        />
        <div className="w-full max-w-[170px] mt-[51px] max-md:mt-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex w-full items-center gap-2 mt-2 p-2.5 rounded-[10px] cursor-pointer transition-colors ${
                item.active
                  ? 'bg-[rgba(230,243,255,0.14)] text-white'
                  : 'text-[rgba(139,139,139,1)] hover:bg-[rgba(255,255,255,0.05)]'
              }`}
            >
              <img
                src={item.icon}
                alt={item.label}
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              />
              <div className="self-stretch my-auto">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
