import { prisma } from "@/lib/prisma";
import { Users, CalendarCheck, Briefcase, TrendingUp } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboard() {
  // Fetch stats using Prisma
  const leadsCount = await prisma.lead.count();
  const newLeadsCount = await prisma.lead.count({ where: { status: "New" } });
  
  // Note: We'll keep these at 0 if the tables don't exist yet, 
  // but for safety, if you haven't created these models in Prisma, 
  // you might want to hardcode them or use existing models.
  // Assuming these models might not be fully migrated, let's wrap in try/catch or just use 0.
  let consultationsCount = 0;
  let portfolioCount = 0;
  
  try {
    // Fetch actual counts from the database
    consultationsCount = await prisma.consultation.count();
    portfolioCount = await prisma.portfolioProject.count();
  } catch (e) {
    // Ignore if tables don't exist or fail
  }

  const stats = [
    { name: "Total Leads", value: leadsCount || 0, icon: Users, href: "/admin/leads", color: "text-blue-600", bg: "bg-blue-100" },
    { name: "New Leads", value: newLeadsCount || 0, icon: TrendingUp, href: "/admin/leads?status=new", color: "text-green-600", bg: "bg-green-100" },
    { name: "Consultations", value: consultationsCount || 0, icon: CalendarCheck, href: "/admin/consultations", color: "text-purple-600", bg: "bg-purple-100" },
    { name: "Portfolio Projects", value: portfolioCount || 0, icon: Briefcase, href: "/admin/portfolio", color: "text-orange-600", bg: "bg-orange-100" },
  ];

  // Fetch recent leads
  const recentLeads = await prisma.lead.findMany({
    take: 5,
    orderBy: { created_at: "desc" },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      service: true,
      status: true,
      created_at: true,
    }
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
        <p className="mt-1 text-sm text-gray-500">Welcome to the Scale Limited admin dashboard.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link key={stat.name} href={stat.href} className="bg-white overflow-hidden rounded-lg shadow-sm border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className={`h-12 w-12 rounded-md flex items-center justify-center ${stat.bg}`}>
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                      <dd>
                        <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="bg-white shadow-sm rounded-lg border border-gray-200">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Leads</h3>
          <Link href="/admin/leads" className="text-sm text-problue hover:text-blue-700 font-medium">
            View All
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentLeads && recentLeads.length > 0 ? (
                recentLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{lead.first_name} {lead.last_name}</div>
                      <div className="text-sm text-gray-500">{lead.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{lead.service || "N/A"}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${lead.status === 'New' ? 'bg-green-100 text-green-800' : ''}
                        ${lead.status === 'Contacted' ? 'bg-blue-100 text-blue-800' : ''}
                        ${lead.status === 'Qualified' ? 'bg-purple-100 text-purple-800' : ''}
                        ${lead.status === 'Closed' ? 'bg-gray-100 text-gray-800' : ''}
                        ${lead.status === 'Spam' ? 'bg-red-100 text-red-800' : ''}
                      `}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    No leads found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
