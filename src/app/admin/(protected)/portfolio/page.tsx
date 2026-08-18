import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { deletePortfolioProject } from "../../actions";

export default async function AdminPortfolioPage() {
  const projects = await prisma.portfolioProject.findMany({
    orderBy: { created_at: "desc" }
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Portfolio Projects</h2>
          <p className="mt-1 text-sm text-gray-500">Manage your success stories and case studies.</p>
        </div>
        <Link href="/admin/portfolio/new">
          <Button className="bg-navy hover:bg-gray-800">
            <Plus className="h-4 w-4 mr-2" />
            Add Project
          </Button>
        </Link>
      </div>

      <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service / Industry</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projects && projects.length > 0 ? (
                projects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{project.title}</div>
                      <div className="text-sm text-gray-500">{project.slug}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{project.service}</div>
                      <div className="text-sm text-gray-500">{project.industry}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${project.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {project.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href={`/admin/portfolio/${project.id}/edit`} className="text-problue hover:text-blue-700 mr-4">Edit</a>
                      <form action={async () => {
                        "use server";
                        await deletePortfolioProject(project.id);
                      }} className="inline">
                        <button type="submit" className="text-red-600 hover:text-red-900">Delete</button>
                      </form>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-sm text-gray-500">
                    No projects found. Add one to get started.
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
