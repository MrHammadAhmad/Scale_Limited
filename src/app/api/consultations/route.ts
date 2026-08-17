import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendConsultationNotification } from "@/lib/email";
import { z } from "zod";

const consultationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  country: z.string().optional(),
  service: z.string().min(1, "Service is required"),
  preferred_date: z.string().optional(),
  preferred_time: z.string().optional(),
  timezone: z.string().optional(),
  budget_range: z.string().optional(),
  requirements: z.string().min(10, "Requirements must be at least 10 characters"),
  notes: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate request body
    const validatedData = consultationSchema.parse(body);

    // Insert into Supabase via Prisma
    const consultation = await prisma.consultation.create({
      data: {
        ...validatedData,
        preferred_date: validatedData.preferred_date 
          ? new Date(validatedData.preferred_date).toISOString().split('T')[0] 
          : null
      }
    });

    // Send email notification (non-blocking)
    sendConsultationNotification(validatedData).catch(console.error);

    return NextResponse.json({ success: true, consultation }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: (error as any).errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
