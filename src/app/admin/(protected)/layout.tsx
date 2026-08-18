import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Sidebar } from "@/components/admin/Sidebar";
import { logoutAdmin } from "../actions";
import { LogOut, User } from "lucide-react";

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
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 z-10 shadow-sm">
          <h1 className="text-xl font-bold text-navy hidden sm:block">Admin Dashboard</h1>
          <h1 className="text-xl font-bold text-navy sm:hidden">Admin</h1>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 rounded-full border border-gray-200 shadow-sm">
              <User className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-semibold text-navy hidden sm:block">Admin User</span>
              <span className="text-sm font-semibold text-navy sm:hidden">Admin</span>
            </div>
            <form action={logoutAdmin}>
              <button className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-bold text-white bg-red-500 hover:bg-red-600 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:block">Sign Out</span>
              </button>
            </form>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 sm:p-6 md:p-8 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
