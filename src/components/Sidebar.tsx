
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

const SidebarContent = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard', path: '/' },
    { id: 'leads', icon: '👥', label: 'Leads', path: '/' },
    { id: 'aktivitat', icon: '📈', label: 'Aktivität', path: '/aktivitat' },
    { id: 'setting', icon: '⚙️', label: 'Setting', path: '/' },
    { id: 'pre-setting', icon: '🔧', label: 'Pre-Setting', path: '/pre-setting' },
    { id: 'closing', icon: '✅', label: 'Closing', path: '/' },
    { id: 'umsatz', icon: '💰', label: 'Umsatz', path: '/' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-6">
        <Link to="/" className="flex items-center">
          <Avatar className="mr-2 w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-lg font-semibold text-white">Acmee Corp</span>
        </Link>
      </div>
      <div className="flex-grow p-4">
        <nav className="grid gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={cn(
                "flex items-center text-sm font-medium text-gray-50 hover:text-gray-100 transition-colors",
                activeMenu === item.id && "text-gray-100"
              )}
              onClick={() => setActiveMenu(item.id)}
            >
              <span className="mr-2 text-lg">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="p-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center text-sm font-medium text-gray-50 hover:text-gray-100 transition-colors">
                <span className="mr-2 text-lg">🧑‍💼</span>
                Account
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    <Avatar className="mr-2 w-6 h-6">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    User Name
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="lg:hidden h-10 w-10 p-0 rounded-md"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full sm:w-64 bg-sidebar">
          <SidebarContent />
        </SheetContent>
      </Sheet>
      <aside className={cn("hidden lg:flex flex-col w-64 bg-sidebar border-r border-sidebar-border", className)}>
        <SidebarContent />
      </aside>
    </>
  );
};
