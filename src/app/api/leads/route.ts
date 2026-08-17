import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendLeadNotification } from "@/lib/email";
import { z } from "zod";

const leadSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  country: z.string().optional(),
  service: z.string().optional(),
  company_size: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate request body
    const validatedData = leadSchema.parse(body);

    // Insert into Supabase using Prisma
    const lead = await prisma.lead.create({
      data: validatedData,
    });

    // Send email notification (non-blocking)
    sendLeadNotification(validatedData).catch(console.error);

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: (error as any).errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
