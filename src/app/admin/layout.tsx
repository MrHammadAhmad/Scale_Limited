import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Sidebar } from "@/components/admin/Sidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/login");
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10">
          <h1 className="text-xl font-semibold text-navy">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">{user.email}</div>
            <form action="/auth/signout" method="post">
              <button className="text-sm font-medium text-red-600 hover:text-red-700">
                Sign Out
              </button>
            </form>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
