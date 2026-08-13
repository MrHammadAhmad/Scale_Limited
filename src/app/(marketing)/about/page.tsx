import { Metadata } from "next";
import { Users, Target, Lightbulb, CheckCircle2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Scale Limited",
  description: "Learn about Scale Limited, our mission, vision, and how we help businesses scale with confidence.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-white pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Helping Businesses Scale With Confidence
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            We are a global partner for businesses looking to extend their capabilities through specialized talent, reliable operations, and modern technology.
          </p>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl mb-6">
                Who We Are
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Scale Limited was founded on a simple principle: growing a business shouldn&apos;t be restricted by operational bottlenecks or a lack of specialized talent.
                </p>
                <p>
                  We provide a comprehensive suite of services encompassing <strong>Staff Augmentation</strong>, <strong>Business Process Outsourcing (BPO)</strong>, and <strong>Technology & AI Solutions</strong>. Our goal is to become an extension of your organization, enabling you to adapt and scale efficiently.
                </p>
                <p>
                  Whether you need a dedicated engineering team, a reliable customer support center, or a custom AI workflow, we deliver solutions tailored to your specific business objectives.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team collaboration" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-problue text-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <p className="font-semibold text-lg mb-2">Our Commitment</p>
                <p className="text-sm text-blue-100">Delivering excellence through quality-focused processes and global expertise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-blue-50 text-problue rounded-xl flex items-center justify-center mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses globally by providing scalable, high-quality talent and technology solutions that drive operational excellence and sustainable growth.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-blue-50 text-problue rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the world&apos;s most trusted partner for business scalability, recognized for our commitment to quality, innovation, and long-term client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl mb-6">
                  Why Businesses Choose Scale Limited
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We combine global talent with strict quality control and modern technology to deliver results that help you scale.
                </p>
                <div className="w-20 h-1 bg-problue rounded-full"></div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  {
                    title: "Global Reach",
                    description: "Supporting businesses across Canada, USA, and Australia with local compliance and global talent.",
                  },
                  {
                    title: "Flexible Scaling",
                    description: "Adapt your team and operations as your business requirements evolve without long-term commitments.",
                  },
                  {
                    title: "Quality-Focused Delivery",
                    description: "Professional teams and structured processes built around your specific business outcomes.",
                  },
                  {
                    title: "Technology-Driven",
                    description: "Modern technology and AI integration help improve efficiency and scalability across your operations.",
                  },
                  {
                    title: "Client-Centric Approach",
                    description: "Solutions designed around each client's specific goals, challenges, and company culture.",
                  },
                  {
                    title: "Long-Term Partnership",
                    description: "We aim to become an extension of your business, not just another vendor.",
                  },
                ].map((reason, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-6 w-6 text-problue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">{reason.title}</h3>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-navy text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Built for a Global Market
            </h2>
            <p className="text-lg text-gray-400">
              Providing distributed teams and seamless operational support across North America and Asia-Pacific.
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] bg-navy rounded-3xl border border-gray-800 shadow-2xl flex items-center justify-center p-8 overflow-hidden group">
            <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity bg-[url('/world-map.svg')] bg-no-repeat bg-center bg-contain brightness-0 invert" />

            {[
              { country: "Canada", description: "North American headquarters.", top: "18%", left: "23%" },
              { country: "USA", description: "Supporting US tech hubs.", top: "22%", left: "25%" },
              { country: "Australia", description: "APAC regional operations.", top: "63%", left: "81%" },
            ].map((loc, idx) => (
              <div
                key={idx}
                className="absolute flex flex-col items-center group/pin cursor-pointer"
                style={{ top: loc.top, left: loc.left }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-problue rounded-full animate-ping opacity-60"></div>
                  <div className="relative bg-problue text-white p-2.5 rounded-full shadow-lg group-hover/pin:scale-110 transition-transform">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 bg-navy text-white backdrop-blur-sm rounded-xl p-4 w-48 text-center opacity-0 group-hover/pin:opacity-100 transition-opacity absolute top-full z-10 pointer-events-none shadow-xl">
                  <h4 className="font-bold text-white mb-1">{loc.country}</h4>
                  <p className="text-xs text-gray-300">{loc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
