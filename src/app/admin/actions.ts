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
    cookieStore.set("admin_auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });
    
    return { success: true };
  }

  return { error: "Invalid username or password" };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_auth");
  redirect("/admin/login");
}

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteLead(id: string) {
  try {
    await prisma.lead.delete({
      where: { id },
    });
    revalidatePath("/admin/leads");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete lead:", error);
    return { error: "Failed to delete lead" };
  }
}

export async function updateLeadStatus(id: string, status: string) {
  try {
    await prisma.lead.update({
      where: { id },
      data: { status }
    });
    revalidatePath("/admin/leads");
    return { success: true };
  } catch (error) {
    console.error("Failed to update lead status:", error);
    return { error: "Failed to update lead status" };
  }
}

export async function createPortfolioProject(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const client = formData.get("client") as string;
    const industry = formData.get("industry") as string;
    const service = formData.get("service") as string;
    const description = formData.get("description") as string;
    const image_url = formData.get("image_url") as string || null;
    const link = formData.get("link") as string || null;
    const published = formData.get("published") === "on";

    if (!title || !slug || !client || !industry || !service || !description) {
      return { error: "All required fields must be provided." };
    }

    await prisma.portfolioProject.create({
      data: {
        title,
        slug,
        client,
        industry,
        service,
        description,
        image_url,
        link,
        published,
      },
    });

    revalidatePath("/admin/portfolio");
    revalidatePath("/portfolio");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to create portfolio project:", error);
    return { error: "Failed to create project. The slug might already be in use." };
  }
}

export async function deleteConsultation(id: string) {
  try {
    await prisma.consultation.delete({
      where: { id },
    });
    revalidatePath("/admin/consultations");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete consultation:", error);
    return { error: "Failed to delete consultation" };
  }
}

export async function updateConsultationStatus(id: string, status: string) {
  try {
    await prisma.consultation.update({
      where: { id },
      data: { status }
    });
    revalidatePath("/admin/consultations");
    return { success: true };
  } catch (error) {
    console.error("Failed to update consultation status:", error);
    return { error: "Failed to update consultation status" };
  }
}

export async function deletePortfolioProject(id: string) {
  try {
    await prisma.portfolioProject.delete({
      where: { id },
    });
    revalidatePath("/admin/portfolio");
    revalidatePath("/portfolio");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete portfolio project:", error);
    return { error: "Failed to delete project" };
  }
}

export async function updatePortfolioProject(id: string, formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const client = formData.get("client") as string;
    const industry = formData.get("industry") as string;
    const service = formData.get("service") as string;
    const description = formData.get("description") as string;
    const image_url = formData.get("image_url") as string || null;
    const link = formData.get("link") as string || null;
    const published = formData.get("published") === "on";

    if (!title || !slug || !client || !industry || !service || !description) {
      return { error: "All required fields must be provided." };
    }

    await prisma.portfolioProject.update({
      where: { id },
      data: {
        title,
        slug,
        client,
        industry,
        service,
        description,
        image_url,
        link,
        published,
      },
    });

    revalidatePath("/admin/portfolio");
    revalidatePath("/portfolio");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to update portfolio project:", error);
    return { error: "Failed to update project. The slug might already be in use." };
  }
}

