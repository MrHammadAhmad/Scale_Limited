import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
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

    const supabase = await createClient();

    // Insert into Supabase
    const { data, error } = await supabase
      .from("leads")
      .insert([validatedData])
      .select()
      .single();

    if (error) {
      console.error("Database error:", error);
      return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 });
    }

    // Send email notification (non-blocking)
    sendLeadNotification(validatedData).catch(console.error);

    return NextResponse.json({ success: true, lead: data }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: (error as any).errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
