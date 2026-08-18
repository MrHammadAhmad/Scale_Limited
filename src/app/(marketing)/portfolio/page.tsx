import { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
export const metadata: Metadata = {
  title: "Portfolio & Success Stories | Scale Limited",
  description: "Explore our success stories and see how Scale Limited helps businesses grow through flexible staffing, reliable BPO, and technology solutions.",
};

export const revalidate = 3600; // Cache for 1 hour

const DEMO_PROJECTS = [
  {
    title: "Enterprise E-commerce Migration",
    slug: "enterprise-ecommerce-migration",
    industry: "E-commerce",
    service: "Technology & AI Solutions",
    summary: "Migrated a legacy retail platform to a modern, scalable architecture handling 10k+ daily orders. DEMO CONTENT",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    title: "Scaling QA Operations for a Fintech Startup",
    slug: "scaling-qa-fintech",
    industry: "Finance",
    service: "Staff Augmentation",
    summary: "Provided a dedicated team of 5 Senior QA Automation Engineers to accelerate product releases. DEMO CONTENT",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "24/7 Customer Support Team Setup",
    slug: "24-7-customer-support",
    industry: "Technology",
    service: "Business Process Outsourcing",
    summary: "Built and managed a dedicated support team providing round-the-clock assistance for a global SaaS company. DEMO CONTENT",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
  }
];

export default async function PortfolioPage() {
  let projects = DEMO_PROJECTS;

  try {
    const data = await prisma.portfolioProject.findMany({
      where: { published: true },
      orderBy: { created_at: "desc" },
      select: {
        title: true,
        slug: true,
        industry: true,
        service: true,
        description: true,
        image_url: true,
      }
    });
      
    if (data && data.length > 0) {
      projects = data.map(p => ({
        title: p.title,
        slug: p.slug,
        industry: p.industry,
        service: p.service,
        summary: p.description,
        image: p.image_url || ""
      }));
    }
  } catch (e) {
    console.error("Prisma fetch failed, falling back to demo data", e);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-navy text-white pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Results That Build Trust
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Discover how we&apos;ve helped businesses across the globe overcome operational challenges and achieve their goals.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.slug} href={`/portfolio/${project.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                      No Image Available
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3 text-xs font-medium uppercase tracking-wider">
                    <span className="text-problue">{project.service}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500">{project.industry}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy group-hover:text-problue transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">
                    {project.summary}
                  </p>
                </div>
              </Link>
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
