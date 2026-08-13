"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const formSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  country: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  company_size: z.string().optional(),
  message: z.string().min(10, "Please provide more details (minimum 10 characters)"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      const response = await fetch("/api/leads", {
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
        <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
        <p className="mb-6">Thank you for reaching out. A member of our team will get back to you shortly.</p>
        <Button onClick={() => setSubmitStatus("idle")} variant="outline">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitStatus === "error" && (
        <div className="bg-red-50 text-red-800 p-4 rounded-lg flex items-start">
          <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
          <p>There was an error submitting your message. Please try again or email us directly.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
          <input
            {...register("first_name")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue"
            placeholder="Jane"
          />
          {errors.first_name && <p className="mt-1 text-sm text-red-600">{errors.first_name.message}</p>}
        </div>
        <div>
          <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
          <input
            {...register("last_name")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue"
            placeholder="Doe"
          />
          {errors.last_name && <p className="mt-1 text-sm text-red-600">{errors.last_name.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email *</label>
          <input
            {...register("email")}
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue"
            placeholder="jane@company.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            {...register("phone")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <input
            {...register("company")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue"
            placeholder="Company Ltd."
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <input
            {...register("country")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue"
            placeholder="e.g. Canada"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In *</label>
          <select
            {...register("service")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue bg-white"
          >
            <option value="">Select a service...</option>
            <option value="Staff Augmentation">Staff Augmentation</option>
            <option value="BPO">Business Process Outsourcing</option>
            <option value="Technology & AI Solutions">Technology & AI Solutions</option>
            <option value="Multiple Services">Multiple Services</option>
            <option value="Other">Other</option>
          </select>
          {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>}
        </div>
        <div>
          <label htmlFor="company_size" className="block text-sm font-medium text-gray-700 mb-1">Company Size</label>
          <select
            {...register("company_size")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue bg-white"
          >
            <option value="">Select size...</option>
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-500">201-500 employees</option>
            <option value="501+">501+ employees</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-problue focus:border-problue"
          placeholder="Tell us about your needs..."
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-8 h-12 text-lg">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Inquiry"
        )}
      </Button>
    </form>
  );
}
