import { Metadata } from "next";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { Clock, ShieldCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Consultation | Scale Limited",
  description: "Schedule a consultation with Scale Limited's experts to discuss your business requirements.",
};

export default function BookConsultationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-navy text-white pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Book a Consultation
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Tell us about your challenges and goals. We&apos;ll help you design a customized solution.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            <div className="lg:w-1/3 order-2 lg:order-1">
              <h2 className="text-2xl font-bold text-navy mb-6">What to Expect</h2>
              
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-problue">
                      <Clock className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Quick Response</h3>
                    <p className="text-sm text-gray-600 mt-1">We typically review requirements and respond within 24 hours.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-problue">
                      <Users className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Expert Consultation</h3>
                    <p className="text-sm text-gray-600 mt-1">You&apos;ll speak directly with a specialist who understands your industry.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-problue">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Confidentiality</h3>
                    <p className="text-sm text-gray-600 mt-1">All information shared is strictly confidential and protected.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-navy mb-6">Consultation Request</h2>
                <ConsultationForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
