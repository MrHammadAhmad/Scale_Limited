"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updatePortfolioProject } from "../../../../actions";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EditProjectForm({ project }: { project: any }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setError(null);
    setLoading(true);
    
    const result = await updatePortfolioProject(project.id, formData);
    
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    } else {
      router.push("/admin/portfolio");
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center space-x-4">
        <Link href="/admin/portfolio" className="text-gray-500 hover:text-gray-900 transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Edit Project</h2>
          <p className="mt-1 text-sm text-gray-500">Update the details of your portfolio project.</p>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-md border border-red-200">
            {error}
          </div>
        )}

        <form action={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Project Title *</label>
              <input type="text" name="title" id="title" defaultValue={project.title} required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy" />
            </div>
            
            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug (URL-friendly) *</label>
              <input type="text" name="slug" id="slug" defaultValue={project.slug} required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy" />
            </div>

            <div>
              <label htmlFor="client" className="block text-sm font-medium text-gray-700">Client Name *</label>
              <input type="text" name="client" id="client" defaultValue={project.client} required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy" />
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry *</label>
              <input type="text" name="industry" id="industry" defaultValue={project.industry} required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy" />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Provided *</label>
              <input type="text" name="service" id="service" defaultValue={project.service} required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy" />
            </div>

            <div>
              <label htmlFor="image_url" className="block text-sm font-medium text-gray-700">Image URL</label>
              <input type="url" name="image_url" id="image_url" defaultValue={project.image_url || ""} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="link" className="block text-sm font-medium text-gray-700">Project Link / URL (Optional)</label>
              <input type="url" name="link" id="link" defaultValue={project.link || ""} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description *</label>
              <textarea name="description" id="description" rows={5} defaultValue={project.description} required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"></textarea>
            </div>

            <div className="sm:col-span-2 flex items-center">
              <input type="checkbox" name="published" id="published" defaultChecked={project.published} className="h-4 w-4 rounded border-gray-300 text-navy focus:ring-navy" />
              <label htmlFor="published" className="ml-2 block text-sm text-gray-900">Published</label>
            </div>
          </div>

          <div className="flex justify-end space-x-4 border-t border-gray-200 pt-6">
            <Link href="/admin/portfolio" className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy">
              Cancel
            </Link>
            <button type="submit" disabled={loading} className="px-4 py-2 text-sm font-medium text-white bg-navy border border-transparent rounded-md shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
