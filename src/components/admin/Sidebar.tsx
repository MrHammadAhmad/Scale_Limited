"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  CalendarCheck, 
  Briefcase, 
  MessageSquare, 
  Settings,
  Layers,
  Building2
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Leads", href: "/admin/leads", icon: Users },
  { name: "Consultations", href: "/admin/consultations", icon: CalendarCheck },
  { name: "Portfolio", href: "/admin/portfolio", icon: Briefcase },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex flex-col w-64 bg-navy text-white h-full">
      <div className="h-16 flex items-center px-6 border-b border-gray-800">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Scale Limited
        </Link>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6">
        <nav className="px-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors
                  ${isActive 
                    ? "bg-problue text-white" 
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }
                `}
              >
                <Icon className={`mr-3 flex-shrink-0 h-5 w-5 ${isActive ? "text-white" : "text-gray-400"}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      

    </div>
  );
}
