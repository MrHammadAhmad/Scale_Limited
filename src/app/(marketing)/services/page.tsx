import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Briefcase, Cpu } from "lucide-react";
export const metadata: Metadata = {
  title: "Our Services | Scale Limited",
  description: "Flexible solutions for a changing business. Explore our staff augmentation, BPO, and technology solutions.",
};

const services = [
  {
    id: "staff-augmentation",
    title: "Staff Augmentation",
    icon: Users,
    description: "Access skilled professionals and flexible teams that extend your capabilities without the complexity of traditional hiring.",
    benefits: [
      "Faster access to talent",
      "Flexible team scaling",
      "Reduced hiring complexity",
      "Specialized expertise",
      "Faster project delivery"
    ],
  },
  {
    id: "bpo",
    title: "Business Process Outsourcing",
    icon: Briefcase,
    description: "Streamline operations by outsourcing critical business processes to a reliable and scalable delivery team.",
    benefits: [
      "Process outsourcing",
      "Operational support",
      "Back-office services",
      "Customer support",
      "Administrative operations"
    ],
  },
  {
    id: "technology-ai",
    title: "Technology & AI Solutions",
    icon: Cpu,
    description: "Build smarter, more efficient operations with modern software, automation, AI, and technology solutions.",
    benefits: [
      "Custom software",
      "AI solutions",
      "Automation workflows",
      "Business intelligence",
      "Digital transformation"
    ],
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-navy text-white pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Flexible Solutions for a Changing Business
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Scale Limited provides the people, processes, and technology you need to overcome operational challenges and drive growth.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 1;
              
              return (
                <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
                  <div className="w-full lg:w-1/2">
                    <div className="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center p-12">
                      <div className="h-32 w-32 rounded-full bg-white shadow-sm flex items-center justify-center text-problue">
                        <Icon className="h-16 w-16" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl font-bold text-navy mb-6">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                    
                    <h3 className="font-semibold text-navy mb-4">Key Benefits:</h3>
                    <ul className="space-y-3 mb-10">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <span className="h-2 w-2 rounded-full bg-problue mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={`/services/${service.id}`}
                      className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
                    >
                      Explore {service.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl mb-4">
              Our Engagement Process
            </h2>
            <p className="text-lg text-gray-600">
              A structured approach to ensure we deliver exactly what your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "01", title: "Discover", desc: "Understand the business challenge and requirements." },
              { id: "02", title: "Plan", desc: "Define the right people, process, or technology solution." },
              { id: "03", title: "Build", desc: "Deploy the required team, service, or technology." },
              { id: "04", title: "Scale", desc: "Continuously optimize and expand as needed." },
            ].map((step, idx) => (
              <div key={step.id} className="relative">
                {idx !== 3 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-gray-200" />
                )}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center relative z-10 h-full flex flex-col items-center">
                  <div className="h-16 w-16 bg-blue-50 text-problue rounded-full flex items-center justify-center text-xl font-bold mb-6">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-problue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-navy opacity-10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
              Ready to Scale What Comes Next?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-10">
              Tell us what you're trying to achieve. Our team will help you explore the right people, processes, and technology for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-problue hover:bg-gray-100 h-14 px-8 text-lg font-semibold">
                Book a Consultation
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white/10 h-14 px-8 text-lg font-semibold bg-transparent">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
