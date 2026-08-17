import { prisma } from "@/lib/prisma";

export default async function ConsultationsPage({
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

  const consultations = await prisma.consultation.findMany(query);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Consultations</h2>
          <p className="mt-1 text-sm text-gray-500">Manage consultation requests.</p>
        </div>
        <div className="flex gap-2">
          <a href="/admin/consultations?status=all" className={`px-4 py-2 text-sm font-medium rounded-md ${!statusFilter || statusFilter === 'all' ? 'bg-navy text-white' : 'bg-white text-gray-700 border border-gray-300'}`}>
            All
          </a>
          <a href="/admin/consultations?status=pending" className={`px-4 py-2 text-sm font-medium rounded-md ${statusFilter === 'pending' ? 'bg-navy text-white' : 'bg-white text-gray-700 border border-gray-300'}`}>
            Pending
          </a>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service & Budget</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preferred Time</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Requested</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {consultations && consultations.length > 0 ? (
                consultations.map((consult) => (
                  <tr key={consult.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{consult.name}</div>
                      <div className="text-sm text-gray-500">{consult.company}</div>
                      <div className="text-sm text-gray-500">{consult.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-medium">{consult.service}</div>
                      <div className="text-sm text-gray-500">{consult.budget_range || "Not specified"}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {consult.preferred_date ? new Date(consult.preferred_date).toLocaleDateString() : "Any date"}
                      </div>
                      <div className="text-sm text-gray-500">
                        {consult.preferred_time || "Any time"} {consult.timezone ? `(${consult.timezone})` : ""}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${consult.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${consult.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' : ''}
                        ${consult.status === 'Completed' ? 'bg-green-100 text-green-800' : ''}
                        ${consult.status === 'Cancelled' ? 'bg-red-100 text-red-800' : ''}
                      `}>
                        {consult.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                      {new Date(consult.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-sm text-gray-500">
                    No consultations found matching your criteria.
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
