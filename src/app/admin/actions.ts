"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAdmin(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const validUsername = process.env.ADMIN_USERNAME || "admin";
  const validPassword = process.env.ADMIN_PASSWORD || "password123";

  if (username === validUsername && password === validPassword) {
    const cookieStore = await cookies();
    // In production, use a secure signed cookie or JWT. This is a basic implementation.
    cookieStore.set("admin_auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });
    
    redirect("/admin/dashboard");
  }

  return { error: "Invalid username or password" };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_auth");
  redirect("/admin/login");
}
