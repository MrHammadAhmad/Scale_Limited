import { prisma } from "@/lib/prisma";
import { deleteConsultation, updateConsultationStatus } from "../../actions";
import { Trash2, CheckCircle, Undo2 } from "lucide-react";

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
          <p className="mt-1 text-sm text-gray-500">Manage your consultation bookings.</p>
        </div>
        <div className="flex gap-2">
          <a href="/admin/consultations?status=all" className={`px-4 py-2 text-sm font-medium rounded-md ${!statusFilter || statusFilter === 'all' ? 'bg-navy text-white' : 'bg-white text-gray-700 border border-gray-300'}`}>
            All
          </a>
          <a href="/admin/consultations?status=scheduled" className={`px-4 py-2 text-sm font-medium rounded-md ${statusFilter === 'scheduled' ? 'bg-navy text-white' : 'bg-white text-gray-700 border border-gray-300'}`}>
            Scheduled
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
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requirements</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {consultations && consultations.length > 0 ? (
                consultations.map((consultation: any) => (
                  <tr key={consultation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{consultation.name}</div>
                      <div className="text-sm text-gray-500">{consultation.email}</div>
                      {consultation.phone && <div className="text-sm text-gray-500">{consultation.phone}</div>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-medium">{consultation.service || "N/A"}</div>
                      <div className="text-sm text-gray-500">{consultation.company}</div>
                      {consultation.preferred_date && <div className="text-sm text-gray-500">{consultation.preferred_date} {consultation.preferred_time}</div>}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 break-words min-w-[200px] max-w-md whitespace-pre-wrap">
                        {consultation.requirements}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${consultation.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' : ''}
                        ${consultation.status === 'Completed' ? 'bg-green-100 text-green-800' : ''}
                        ${consultation.status === 'Cancelled' ? 'bg-red-100 text-red-800' : ''}
                      `}>
                        {consultation.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                      {new Date(consultation.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        {consultation.status !== 'Completed' && (
                          <form action={async () => {
                            "use server";
                            await updateConsultationStatus(consultation.id, 'Completed');
                          }}>
                            <button type="submit" className="text-green-500 hover:text-green-700 transition-colors p-2 rounded-full hover:bg-green-50" title="Mark as Done">
                              <CheckCircle className="w-4 h-4" />
                            </button>
                          </form>
                        )}
                        {consultation.status === 'Completed' && (
                          <form action={async () => {
                            "use server";
                            await updateConsultationStatus(consultation.id, 'Scheduled');
                          }}>
                            <button type="submit" className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100" title="Undo completed status">
                              <Undo2 className="w-4 h-4" />
                            </button>
                          </form>
                        )}
                        <form action={async () => {
                          "use server";
                          await deleteConsultation(consultation.id);
                        }}>
                          <button type="submit" className="text-red-500 hover:text-red-700 transition-colors p-2 rounded-full hover:bg-red-50" title="Delete consultation">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-sm text-gray-500">
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
