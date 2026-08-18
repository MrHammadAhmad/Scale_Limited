import { prisma } from "@/lib/prisma";
import EditProjectForm from "./EditProjectForm";
import { notFound } from "next/navigation";

export default async function EditPortfolioProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  const project = await prisma.portfolioProject.findUnique({
    where: { id },
  });

  if (!project) {
    notFound();
  }

  return <EditProjectForm project={project} />;
}
