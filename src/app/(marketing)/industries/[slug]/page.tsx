import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createPublicClient } from "@/lib/supabase/server";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Fallback demo data
const DEMO_INDUSTRIES = {
  "technology": {
    name: "Technology",
    short_description: "Supporting high-growth tech companies with engineering talent and operational scale.",
    description: "Scale Limited understands the fast-paced nature of the technology sector. We provide scalable engineering teams, customer support, and advanced AI implementations that allow software, SaaS, and IT companies to grow rapidly without the burden of massive overhead.",
    benefits: ["Rapid scaling of engineering teams", "Deep technical expertise", "24/7 technical support", "Reduced time-to-market"],
    capabilities: ["Software Development Teams", "IT Helpdesk", "Cloud Operations", "AI Integrations"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  },
  "healthcare": {
    name: "Healthcare",
    short_description: "Providing secure, reliable support and technology solutions for healthcare organizations.",
    description: "We help healthcare providers and health-tech companies modernize their operations while maintaining strict security and compliance standards. From secure patient data entry to building telehealth platforms, our teams deliver reliability.",
    benefits: ["Strict data security compliance", "Improved patient experiences", "Streamlined administrative tasks", "Modern healthcare software"],
    capabilities: ["Medical Data Entry", "Telehealth App Development", "Patient Support", "Billing Operations"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
  },
  "finance": {
    name: "Finance",
    short_description: "Enabling financial institutions to modernize operations and enhance customer experience.",
    description: "Scale Limited partners with banks, accounting firms, and fintech startups to modernize legacy systems, automate financial reporting, and provide top-tier customer service that builds trust with your clients.",
    benefits: ["Enhanced data accuracy", "Automated compliance reporting", "Secure financial processing", "Improved customer trust"],
    capabilities: ["Fintech Development", "Accounting Support", "Fraud Detection Systems", "Financial Data Processing"],
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
  },
  "e-commerce": {
    name: "E-commerce",
    short_description: "Helping retail and e-commerce brands scale customer support and operational logistics.",
    description: "From managing product catalogs to handling peak-season customer support volumes, we provide the backbone operations for modern retail and e-commerce businesses to thrive in a competitive landscape.",
    benefits: ["Scalable peak-season support", "Flawless catalog management", "Enhanced buyer experience", "Data-driven insights"],
    capabilities: ["E-commerce Development", "Catalog Management", "Order Processing", "Customer Service"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop"
  }
};

export const revalidate = 3600; // Cache for 1 hour

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const supabase = createPublicClient();
      const { data: industry } = await supabase
        .from("industries")
        .select("name, short_description")
        .eq("slug", slug)
        .single();

      if (industry) {
        return {
          title: `${industry.name} | Scale Limited`,
          description: industry.short_description,
        };
      }
    }
  } catch (e) {
    // Ignore error and fall back
  }

  const demoIndustry = DEMO_INDUSTRIES[slug as keyof typeof DEMO_INDUSTRIES];
  if (demoIndustry) {
    return {
      title: `${demoIndustry.name} | Scale Limited`,
      description: demoIndustry.short_description,
    };
  }

  return { title: "Industry Not Found | Scale Limited" };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let industry: any = null;

  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const supabase = createPublicClient();
      const { data } = await supabase
        .from("industries")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .single();
      
      if (data) industry = data;
    }
  } catch (e) {
    console.error("Supabase fetch failed, falling back to demo data", e);
  }

  if (!industry) {
    industry = DEMO_INDUSTRIES[slug as keyof typeof DEMO_INDUSTRIES];
  }

  if (!industry) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-white pt-32 pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-problue rounded-full mix-blend-multiply filter blur-[120px] opacity-40"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 text-left">
              <Link href="/industries" className="inline-flex items-center text-blue-300 hover:text-white mb-8 transition-colors font-medium">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Back to Industries
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                {industry.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                {industry.short_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full bg-problue text-white hover:bg-blue-600 h-14 px-8 text-lg font-semibold shadow-lg transition-all hover:-translate-y-1">
                  Book Consultation
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 aspect-[4/3] w-full">
                <img 
                  src={industry.image || "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"} 
                  alt={industry.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-600 mb-16">
            <h2 className="text-3xl font-bold text-navy mb-6">Overview</h2>
            <p>{industry.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Benefits */}
            {industry.benefits && industry.benefits.length > 0 && (
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-navy mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {industry.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-problue mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Capabilities */}
            {industry.capabilities && industry.capabilities.length > 0 && (
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-navy mb-6">Our Capabilities</h3>
                <ul className="space-y-4">
                  {industry.capabilities.map((capability: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-problue mr-3 flex-shrink-0 mt-2" />
                      <span className="text-gray-700">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-problue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-navy opacity-10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
              Ready to Scale Your {industry.name} Business?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-10">
              Tell us what you're trying to achieve. Our team will help you explore the right people, processes, and technology for your specific sector.
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
