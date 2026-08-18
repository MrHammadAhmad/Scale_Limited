import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createPublicClient } from "@/lib/supabase/server";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Fallback demo data
const DEMO_SERVICES = {
  // Staff Augmentation
  "full-stack-developers": {
    title: "Full Stack Developers",
    short_description: "Expert full-stack developers to build and scale your applications.",
    description: "Hire highly vetted full-stack developers proficient in modern frontend and backend technologies. Our developers integrate seamlessly with your in-house team to accelerate product delivery and maintain code quality.",
    benefits: ["Rapid team scaling", "Vetted technical expertise", "Seamless integration", "Cost-effective development"],
    capabilities: ["React & Next.js", "Node.js & Python", "Database Architecture", "Cloud Deployment"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  "ai-ml-engineers": {
    title: "AI & ML Engineers",
    short_description: "Build intelligent systems with dedicated AI and Machine Learning experts.",
    description: "Access top-tier AI and ML engineers to develop custom algorithms, predictive models, and intelligent automation systems. We help you leverage your data to build smart, future-proof applications.",
    benefits: ["Advanced AI expertise", "Custom algorithm development", "Data-driven insights", "Scalable ML pipelines"],
    capabilities: ["Generative AI", "Predictive Modeling", "NLP Solutions", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
  },
  "ui-ux-designers": {
    title: "UI/UX Designers",
    short_description: "Create intuitive and beautiful user experiences.",
    description: "Our UI/UX designers focus on creating user-centric interfaces that engage and convert. From wireframing to high-fidelity prototypes, we design digital products that your users will love.",
    benefits: ["User-centric design", "Increased conversion rates", "Modern aesthetics", "Comprehensive prototyping"],
    capabilities: ["Wireframing", "High-fidelity Prototypes", "User Research", "Design Systems"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
  },
  "customer-support": {
    title: "Customer Support Representatives",
    short_description: "Deliver exceptional 24/7 support to your customers.",
    description: "Scale your customer service operations with dedicated, multilingual support representatives. We ensure your customers receive timely, empathetic, and effective resolutions across all channels.",
    benefits: ["24/7 coverage", "Multichannel support", "High customer satisfaction", "Rapid ticket resolution"],
    capabilities: ["Email & Live Chat", "Phone Support", "Technical Support", "Customer Success"],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
  },
  "finance-accounting": {
    title: "Finance & Accounting Staff",
    short_description: "Reliable financial professionals to manage your books and accounting.",
    description: "Streamline your financial operations with dedicated accountants and financial analysts. We handle bookkeeping, payroll, and financial reporting so you can focus on growing your business.",
    benefits: ["Accurate bookkeeping", "Timely financial reporting", "Regulatory compliance", "Reduced overhead costs"],
    capabilities: ["Bookkeeping", "Payroll Processing", "Financial Analysis", "Tax Preparation Support"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2036&auto=format&fit=crop"
  },
  "operations-back-office": {
    title: "Operations & Back Office Staff",
    short_description: "Efficient back-office support to keep your business running smoothly.",
    description: "Delegate your administrative and back-office tasks to our trained professionals. We manage data processing, document management, and routine operations with high accuracy and speed.",
    benefits: ["Increased operational efficiency", "Reduced administrative burden", "High accuracy rates", "Scalable support"],
    capabilities: ["Administrative Support", "Data Management", "Document Processing", "Process Operations"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
  },
  
  // Business Process Services
  "contact-center": {
    title: "Contact Center Services",
    short_description: "Comprehensive inbound and outbound contact center solutions.",
    description: "Our managed contact center services provide scalable inbound support and outbound campaign management. We handle customer inquiries, technical support, and proactive outreach with professional excellence.",
    benefits: ["Omnichannel support", "Scalable capacity", "Quality assurance", "Detailed analytics"],
    capabilities: ["Inbound Customer Care", "Outbound Campaigns", "Technical Helpdesk", "Multilingual Support"],
    image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop"
  },
  "data-entry": {
    title: "Data Entry & Processing",
    short_description: "Accurate and secure data management services.",
    description: "Outsource your data entry tasks to our meticulous processing teams. We ensure high accuracy, data security, and rapid turnaround times for all your data management needs.",
    benefits: ["99.9% accuracy guarantee", "Strict data security", "Fast turnaround", "Cost reduction"],
    capabilities: ["CRM Data Entry", "E-commerce Product Uploads", "Document Digitization", "Data Cleansing"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  "sales-lead-generation": {
    title: "Sales & Lead Generation",
    short_description: "Accelerate your growth with targeted sales outreach.",
    description: "Supercharge your sales pipeline with our dedicated lead generation teams. We handle prospecting, cold outreach, and lead qualification, delivering warm prospects directly to your closing team.",
    benefits: ["Increased sales pipeline", "Targeted prospecting", "Qualified meetings", "Scalable outreach"],
    capabilities: ["B2B Lead Generation", "Cold Calling", "Email Outreach", "Appointment Setting"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },

  // Technology Services
  "web-design-development": {
    title: "Web Design & Development",
    short_description: "Build fast, scalable, and responsive web applications.",
    description: "We design and develop modern web applications tailored to your business needs. Utilizing the latest frameworks like Next.js and React, we deliver fast, secure, and SEO-optimized digital experiences.",
    benefits: ["High-performance applications", "Responsive design", "SEO optimization", "Secure architecture"],
    capabilities: ["Custom Web Apps", "E-commerce Platforms", "CMS Development", "Landing Pages"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
  },
  "custom-software": {
    title: "Custom Software Development",
    short_description: "Tailored software solutions to solve your unique business challenges.",
    description: "Our engineering team builds bespoke software solutions from the ground up. Whether you need internal tools, enterprise platforms, or complex integrations, we deliver robust and scalable software.",
    benefits: ["Tailored to your workflows", "Scalable architecture", "Seamless integrations", "Ongoing technical support"],
    capabilities: ["Enterprise Software", "API Development", "Legacy Modernization", "Cloud Architecture"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  },
  "ai-chatbots": {
    title: "AI Chatbots & Virtual Assistants",
    short_description: "Automate customer interactions with intelligent AI chatbots.",
    description: "Deploy advanced conversational AI to handle customer inquiries 24/7. Our custom chatbots integrate with your existing systems to provide instant, accurate, and personalized responses.",
    benefits: ["24/7 instant responses", "Reduced support costs", "Seamless handoff to humans", "Continuous learning"],
    capabilities: ["Customer Support Bots", "Lead Qualification Bots", "Internal Knowledge Bots", "Multi-platform Integration"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop"
  },

  // Fallbacks for original generic categories
  "staff-augmentation": {
    title: "Staff Augmentation",
    short_description: "Access skilled professionals and flexible teams.",
    description: "Our staff augmentation services allow you to scale your team quickly with vetted professionals. Whether you need specialized technical skills, project managers, or operational support, we provide dedicated talent that integrates seamlessly into your existing workflows.",
    benefits: ["Faster access to talent", "Flexible team scaling", "Reduced hiring complexity", "Specialized expertise"],
    capabilities: ["Software Engineers", "QA Analysts", "Project Managers", "Designers"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  },
  "bpo": {
    title: "Business Process Outsourcing",
    short_description: "Streamline operations by outsourcing critical business processes.",
    description: "Scale Limited BPO solutions are designed to handle your back-office, customer support, and administrative operations efficiently. We build structured teams that operate on your specific processes, allowing your core team to focus on strategic growth.",
    benefits: ["Reduced operational costs", "Scalable support teams", "Process optimization", "24/7 coverage options"],
    capabilities: ["Customer Support", "Data Entry & Management", "Back-office Operations", "Virtual Assistance"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
  },
  "technology-ai": {
    title: "Technology & AI Solutions",
    short_description: "Build smarter, more efficient operations.",
    description: "We design, build, and integrate custom software and AI-driven solutions that solve complex business challenges. From automating repetitive tasks to building enterprise-grade applications, our technology team delivers results.",
    benefits: ["Custom software development", "AI and automation integration", "System modernization", "Improved efficiency"],
    capabilities: ["Custom Web Applications", "AI Chatbots", "Workflow Automation", "API Integrations"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  }
};

export const revalidate = 3600; // Cache for 1 hour

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const supabase = createPublicClient();
      const { data: service } = await supabase
        .from("services")
        .select("title, short_description")
        .eq("slug", slug)
        .single();

      if (service) {
        return {
          title: `${service.title} | Scale Limited`,
          description: service.short_description,
        };
      }
    }
  } catch (e) {
    // Ignore error and fall back
  }

  const demoService = DEMO_SERVICES[slug as keyof typeof DEMO_SERVICES];
  if (demoService) {
    return {
      title: `${demoService.title} | Scale Limited`,
      description: demoService.short_description,
    };
  }

  return { title: "Service Not Found | Scale Limited" };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let service: any = null;

  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const supabase = createPublicClient();
      const { data } = await supabase
        .from("services")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .single();
      
      if (data) service = data;
    }
  } catch (e) {
    console.error("Supabase fetch failed, falling back to demo data", e);
  }

  if (!service) {
    service = DEMO_SERVICES[slug as keyof typeof DEMO_SERVICES];
  }

  if (!service) {
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
              <Link href="/services" className="inline-flex items-center text-blue-300 hover:text-white mb-8 transition-colors font-medium">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Back to Services
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                {service.short_description}
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
                  src={service.image || "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"} 
                  alt={service.title} 
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
            <p>{service.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Benefits */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-navy mb-6">Benefits</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-problue mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Capabilities */}
            {service.capabilities && service.capabilities.length > 0 && (
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-navy mb-6">Capabilities</h3>
                <ul className="space-y-4">
                  {service.capabilities.map((capability: string, index: number) => (
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
