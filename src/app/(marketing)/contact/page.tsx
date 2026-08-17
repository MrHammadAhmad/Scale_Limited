import { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapPin, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Scale Limited",
  description: "Get in touch with Scale Limited to discuss how we can help your business grow.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-navy text-white pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Let&apos;s Talk About Your Next Opportunity
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Whether you need to scale your team or outsource your operations, our experts are ready to help.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-navy mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-problue mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-navy">Email Us</h3>
                    <p className="text-gray-600 mt-1">For general inquiries and partnership opportunities.</p>
                    <a href="mailto:info@scalelimited.cc" className="text-problue font-medium mt-2 inline-block hover:underline">info@scalelimited.cc</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-problue mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-navy">Call Us</h3>
                    <p className="text-gray-600 mt-1">Available during regular business hours (EST).</p>
                    <a href="tel:+16478709695" className="text-problue font-medium mt-2 inline-block hover:underline">+1 6478709695</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-problue mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-navy">Global Presence</h3>
                    <ul className="text-gray-600 mt-2 space-y-2">
                      <li>Toronto, ON, Canada (HQ)</li>
                      <li>New York, NY, USA</li>
                      <li>Sydney, NSW, Australia</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-navy mb-6">Send an Inquiry</h2>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
