"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const consultationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  country: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  preferred_date: z.string().optional(),
  preferred_time: z.string().optional(),
  timezone: z.string().optional(),
  budget_range: z.string().optional(),
  requirements: z.string().min(10, "Please provide more details (minimum 10 characters)"),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof consultationSchema>;

export function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(consultationSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      const response = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-green-50 text-green-800 p-8 rounded-2xl border border-green-200 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
        <p className="mb-6">Thank you for requesting a consultation. We have sent a confirmation to your email and will be in touch shortly to finalize the schedule.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitStatus === "error" && (
        <div className="bg-red-50 text-red-800 p-4 rounded-lg flex items-start">
          <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
          <p>There was an error submitting your request. Please try again or email us directly.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            {...register("name")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue"
            placeholder="Jane Doe"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
          <input
            {...register("company")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue"
            placeholder="Company Ltd."
          />
          {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Work Email *</label>
          <input
            {...register("email")}
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue"
            placeholder="jane@company.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            {...register("phone")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Service Interested In *</label>
          <select
            {...register("service")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue bg-white"
          >
            <option value="">Select a service...</option>
            <option value="Staff Augmentation">Staff Augmentation</option>
            <option value="BPO">Business Process Outsourcing</option>
            <option value="Technology & AI Solutions">Technology & AI Solutions</option>
            <option value="Multiple Services">Multiple Services</option>
          </select>
          {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <input
            {...register("country")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue"
            placeholder="e.g. USA"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
          <input
            {...register("preferred_date")}
            type="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
          <input
            {...register("preferred_time")}
            type="time"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
          <select
            {...register("timezone")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue bg-white"
          >
            <option value="">Select Timezone...</option>
            <option value="EST">Eastern Time (EST)</option>
            <option value="CST">Central Time (CST)</option>
            <option value="PST">Pacific Time (PST)</option>
            <option value="GMT">Greenwich Mean Time (GMT)</option>
            <option value="CET">Central European Time (CET)</option>
            <option value="AEST">Australian Eastern (AEST)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range</label>
        <select
          {...register("budget_range")}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue bg-white"
        >
          <option value="">Select a range...</option>
          <option value="< $10k">Less than $10,000</option>
          <option value="$10k - $50k">$10,000 - $50,000</option>
          <option value="$50k - $100k">$50,000 - $100,000</option>
          <option value="$100k+">$100,000+</option>
          <option value="To be discussed">To be discussed</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Business Requirements *</label>
        <textarea
          {...register("requirements")}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue"
          placeholder="Please describe your challenges, goals, or what you're looking to build..."
        ></textarea>
        {errors.requirements && <p className="mt-1 text-sm text-red-600">{errors.requirements.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
        <textarea
          {...register("notes")}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue"
          placeholder="Any other details we should know?"
        ></textarea>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-8 h-12 text-lg">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          "Request Consultation"
        )}
      </Button>
    </form>
  );
}
