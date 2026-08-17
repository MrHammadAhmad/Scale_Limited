import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Sidebar } from "@/components/admin/Sidebar";
import { logoutAdmin } from "../actions";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("admin_auth")?.value === "true";

  if (!isAdmin) {
    redirect("/admin/login");
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10">
          <h1 className="text-xl font-semibold text-navy">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">Admin</div>
            <form action={logoutAdmin}>
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
