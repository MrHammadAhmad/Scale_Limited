import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Briefcase, Cpu, ShieldCheck, Globe, Zap, TrendingUp, CheckCircle2, ChevronDown, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Scale Limited",
  description: "Flexible solutions for a changing business. Explore our staff augmentation, BPO, and technology solutions.",
};

const services = [
  {
    id: "staff-augmentation",
    title: "Staff Augmentation",
    icon: Users,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    description: "Access skilled professionals and flexible teams that extend your capabilities without the complexity of traditional hiring. From developers to specialized engineers, we provide talent that matches your culture and technical needs.",
    benefits: [
      "Faster access to global talent",
      "Flexible team scaling up or down",
      "Reduced HR & hiring complexity",
      "Specialized domain expertise"
    ],
  },
  {
    id: "bpo",
    title: "Business Process Outsourcing",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop",
    description: "Streamline your daily operations by outsourcing critical, time-consuming business processes to a reliable and scalable delivery team. Focus your in-house team on core strategic growth.",
    icon: Briefcase,
    benefits: [
      "24/7 Customer Support & Care",
      "Data entry and processing",
      "Finance and accounting operations",
      "Administrative back-office operations"
    ],
  },
  {
    id: "technology-ai",
    title: "Technology & AI Solutions",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    icon: Cpu,
    description: "Build smarter, more efficient operations with modern software, automation, and AI. We architect solutions that give you a competitive edge in a digital-first world.",
    benefits: [
      "Custom web & mobile software",
      "AI chatbots & intelligent assistants",
      "Automation workflows & integrations",
      "Data engineering & BI analytics"
    ],
  }
];

const whyChooseUs = [
  {
    title: "Global Talent Pool",
    description: "Access top-tier professionals vetted for skills, communication, and cultural fit.",
    icon: Globe,
  },
  {
    title: "Data Security & Compliance",
    description: "Enterprise-grade security protocols and strict NDA enforcement.",
    icon: ShieldCheck,
  },
  {
    title: "Seamless Integration",
    description: "Our teams and technology plug directly into your existing workflows.",
    icon: Zap,
  },
  {
    title: "Unmatched Scalability",
    description: "Scale your resources up or down rapidly based on market demands.",
    icon: TrendingUp,
  }
];

const industries = [
  { name: "Finance & Fintech", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", desc: "Secure and scalable solutions for financial institutions." },
  { name: "Healthcare & MedTech", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop", desc: "Compliant technology and support for healthcare providers." },
  { name: "E-Commerce & Retail", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1950&auto=format&fit=crop", desc: "24/7 support and dynamic scaling for online retailers." },
  { name: "SaaS & Technology", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", desc: "Engineering augmentation for fast-growing tech companies." }
];

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "AWS", icon: "☁️" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "TypeScript", icon: "📘" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION (Left Text, Right Image) */}
      <section className="bg-navy text-white pt-32 pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-problue rounded-full mix-blend-multiply filter blur-[120px] opacity-40"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Building Seamless <br /><span className="text-problue">Digital Experiences</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Scale Limited provides the people, processes, and technology you need to overcome operational bottlenecks, reduce costs, and drive exponential growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full bg-problue text-white hover:bg-blue-600 h-14 px-8 text-lg font-semibold shadow-lg transition-all hover:-translate-y-1">
                  Book Consultation
                </Link>
                <Link href="#services" className="inline-flex items-center justify-center rounded-full border border-gray-600 text-white hover:bg-gray-800 h-14 px-8 text-lg font-semibold transition-all">
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 aspect-[4/3] w-full">
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Technology and Business" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US (Left Title/Desc, Right Vertical Cards) */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/3">
              <div className="sticky top-32">
                <h4 className="text-problue font-bold tracking-wider uppercase text-sm mb-3">Why Us?</h4>
                <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl mb-6">
                  Why Partner with Scale Limited?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We go beyond just providing services—we become an extension of your business, committed to your long-term success. Our globally distributed teams are ready to deploy.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 gap-6">
                {whyChooseUs.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="flex gap-6 p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex-shrink-0">
                        <div className="h-14 w-14 rounded-xl bg-blue-50 text-problue flex items-center justify-center">
                          <Icon className="h-7 w-7" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy mb-2">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES GRID (Image on top, text below) */}
      <section id="services" className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-problue font-bold tracking-wider uppercase text-sm mb-3">What We Do</h4>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions tailored to accelerate your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col group">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-500"></div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-lg bg-blue-50 text-problue flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold text-navy">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 flex-1">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {service.benefits.slice(0,3).map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-problue mr-2 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={`/services/${service.id}`}
                      className="inline-flex items-center text-problue font-semibold hover:text-blue-700 transition-colors mt-auto"
                    >
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-problue font-bold tracking-wider uppercase text-sm mb-3">Expertise</h4>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Domain expertise across key global sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, idx) => (
              <div key={idx} className="group cursor-pointer rounded-2xl overflow-hidden relative border border-gray-100 shadow-sm h-64">
                <img src={ind.image} alt={ind.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-problue transition-colors">{ind.name}</h3>
                  <p className="text-sm text-gray-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR TECH STACK */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-problue font-bold tracking-wider uppercase text-sm mb-3">Technology</h4>
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl mb-4">
              Our Tech Stack
            </h2>
            <p className="text-lg text-gray-600">
              We leverage modern, scalable technologies to build robust solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
            {techStack.map((tech, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:border-problue hover:shadow-md transition-all">
                <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{tech.icon}</span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-24 bg-navy text-white text-center border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Let's discuss how Scale Limited can help you build your dream team and scale your operations to the next level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full bg-problue text-white hover:bg-blue-600 h-14 px-8 text-lg font-bold transition-all shadow-lg hover:-translate-y-1">
              Book a Consultation
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-gray-600 text-white hover:bg-gray-800 h-14 px-8 text-lg font-bold transition-all">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
