import { Metadata } from "next";
import Link from "next/link";
import { createPublicClient } from "@/lib/supabase/server";
import { ArrowRight, MonitorSmartphone, HeartPulse, Wallet, ShoppingCart } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries | Scale Limited",
  description: "Scale Limited brings specialized knowledge and tailored solutions to meet the unique challenges of your sector.",
};

export const revalidate = 3600; // Cache for 1 hour

// Map icon names from DB or use defaults
const getIcon = (slug: string) => {
  switch (slug) {
    case 'technology': return MonitorSmartphone;
    case 'healthcare': return HeartPulse;
    case 'finance': return Wallet;
    case 'e-commerce': return ShoppingCart;
    default: return MonitorSmartphone;
  }
};

const DEMO_INDUSTRIES = [
  {
    name: "Technology",
    slug: "technology",
    description: "Supporting high-growth tech companies with engineering talent and operational scale.",
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    description: "Providing secure, reliable support and technology solutions for healthcare organizations.",
  },
  {
    name: "Finance",
    slug: "finance",
    description: "Enabling financial institutions to modernize operations and enhance customer experience.",
  },
  {
    name: "E-commerce",
    slug: "e-commerce",
    description: "Helping retail and e-commerce brands scale customer support and operational logistics.",
  },
];

export default async function IndustriesPage() {
  let industries = DEMO_INDUSTRIES;

  try {
    const supabase = createPublicClient();
    const { data } = await supabase
      .from("industries")
      .select("name, slug, description")
      .eq("published", true)
      .order("name", { ascending: true });
      
    if (data && data.length > 0) {
      industries = data;
    }
  } catch (e) {
    console.error("Supabase fetch failed, falling back to demo data", e);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-navy text-white pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Supporting Businesses Across Industries
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            We bring specialized knowledge and tailored solutions to meet the unique challenges of your sector.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {industries.map((industry) => {
              const Icon = getIcon(industry.slug);
              return (
                <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group block bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col">
                  <div className="h-16 w-16 rounded-xl bg-gray-50 flex items-center justify-center text-navy mb-8 group-hover:bg-blue-50 group-hover:text-problue transition-colors">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-navy mb-4 group-hover:text-problue transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-lg mb-8 flex-grow">
                    {industry.description}
                  </p>
                  <div className="inline-flex items-center text-problue font-medium group-hover:text-blue-700 transition-colors mt-auto">
                    View Industry Solutions
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
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
