import { prisma } from "@/lib/prisma";

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const statusFilter = sp.status as string | undefined;

  let query: any = {
    orderBy: { created_at: "desc" },
  };

  if (statusFilter && statusFilter.toLowerCase() !== 'all') {
    query.where = {
      status: statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1).toLowerCase()
    };
  }

  const leads = await prisma.lead.findMany(query);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Leads</h2>
          <p className="mt-1 text-sm text-gray-500">Manage your contact form submissions.</p>
        </div>
        <div className="flex gap-2">
          <a href="/admin/leads?status=all" className={`px-4 py-2 text-sm font-medium rounded-md ${!statusFilter || statusFilter === 'all' ? 'bg-navy text-white' : 'bg-white text-gray-700 border border-gray-300'}`}>
            All
          </a>
          <a href="/admin/leads?status=new" className={`px-4 py-2 text-sm font-medium rounded-md ${statusFilter === 'new' ? 'bg-navy text-white' : 'bg-white text-gray-700 border border-gray-300'}`}>
            New
          </a>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leads && leads.length > 0 ? (
                leads.map((lead: any) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{lead.first_name} {lead.last_name}</div>
                      <div className="text-sm text-gray-500">{lead.email}</div>
                      {lead.phone && <div className="text-sm text-gray-500">{lead.phone}</div>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-medium">{lead.service || "N/A"}</div>
                      {lead.company && <div className="text-sm text-gray-500">{lead.company}</div>}
                      {lead.country && <div className="text-sm text-gray-500">{lead.country}</div>}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs truncate" title={lead.message}>
                        {lead.message}
                      </div>
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
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-sm text-gray-500">
                    No leads found matching your criteria.
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
