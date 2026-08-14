"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowRight, Building2, Briefcase, Cpu, Users } from "lucide-react";

const servicesMegaMenu = [
  {
    category: "Staff Augmentation",
    icon: Users,
    items: [
      { label: "Full Stack Developers", href: "/services/full-stack-developers" },
      { label: "AI & ML Engineers", href: "/services/ai-ml-engineers" },
      { label: "UI/UX Designers", href: "/services/ui-ux-designers" },
      { label: "Customer Support Reps", href: "/services/customer-support" },
      { label: "Finance & Accounting", href: "/services/finance-accounting" },
      { label: "Operations & Back Office", href: "/services/operations-back-office" },
    ]
  },
  {
    category: "Business Process",
    icon: Briefcase,
    items: [
      { label: "Contact Center", href: "/services/contact-center" },
      { label: "Data Entry & Processing", href: "/services/data-entry" },
      { label: "Sales & Lead Generation", href: "/services/sales-lead-generation" },
    ]
  },
  {
    category: "Technology Solutions",
    icon: Cpu,
    items: [
      { label: "Web Design & Development", href: "/services/web-design-development" },
      { label: "Custom Software", href: "/services/custom-software" },
      { label: "AI Chatbots & Assistants", href: "/services/ai-chatbots" },
      { label: "AI Voice Receptionists", href: "/services/ai-voice-receptionists" },
      { label: "Work Flow Automation", href: "/services/workflow-automation" },
    ]
  }
];

const industriesMegaMenu = [
  { label: "Technology", href: "/industries/technology", desc: "Supporting high-growth tech companies with engineering talent and operational scale." },
  { label: "Healthcare", href: "/industries/healthcare", desc: "Providing secure, reliable support and technology solutions for healthcare." },
  { label: "Finance", href: "/industries/finance", desc: "Enabling financial institutions to modernize operations." },
  { label: "E-commerce", href: "/industries/e-commerce", desc: "Helping retail brands scale customer support and logistics." },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isDark = false;

  return (
    <header
      className="fixed top-0 z-50 w-full transition-all duration-300"
      style={{
        backgroundColor: "white",
        boxShadow: scrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "none",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 relative w-[220px] h-[64px]">
            <Image
              src="/logo-white.png"
              alt="Scale Limited Logo"
              width={1073}
              height={375}
              className={`w-full h-full object-contain absolute left-0 transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              priority
            />
            <Image
              src="/logo-dark.png"
              alt="Scale Limited Logo"
              width={1073}
              height={375}
              className={`w-full h-full object-contain absolute left-0 transition-opacity duration-300 ${isDark ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link prefetch={false} href="/" className={`transition-colors ${isDark ? (isActive("/") ? "text-white" : "text-gray-300 hover:text-white") : (isActive("/") ? "text-problue" : "text-navy hover:text-problue")}`}>Home</Link>
            <Link prefetch={false} href="/about" className={`transition-colors ${isDark ? (isActive("/about") ? "text-white" : "text-gray-300 hover:text-white") : (isActive("/about") ? "text-problue" : "text-navy hover:text-problue")}`}>About</Link>

            {/* Services Mega Menu */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setIndustriesOpen(false); }}
                className={`flex items-center gap-1 transition-colors py-8 ${isDark
                  ? (isActive("/services") || servicesOpen ? "text-white" : "text-gray-300 hover:text-white")
                  : (isActive("/services") || servicesOpen ? "text-problue" : "text-navy hover:text-problue")
                  }`}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-[80px] w-[900px] rounded-2xl bg-white text-navy border border-gray-200 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200">
                  <div className="flex">
                    {/* Categories */}
                    <div className="flex-grow p-8 grid grid-cols-3 gap-8">
                      {servicesMegaMenu.map((col) => {
                        const Icon = col.icon;
                        return (
                          <div key={col.category}>
                            <h3 className="text-problue font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                              <Icon className="h-5 w-5" />
                              {col.category}
                            </h3>
                            <ul className="space-y-3">
                              {col.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    prefetch={false}
                                    href={item.href}
                                    className="text-gray-600 hover:text-problue transition-colors text-sm font-medium flex items-center group"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-2 group-hover:bg-problue transition-colors" />
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                    {/* Promo Card */}
                    <div className="w-[280px] bg-gray-50 border-l border-gray-100 p-8 flex flex-col justify-center relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
                      <div className="relative z-10">
                        <h4 className="text-xl font-bold text-navy mb-3">Scale Faster Today</h4>
                        <p className="text-sm text-gray-500 mb-6">Talk to our experts to find the right solutions for your specific business needs.</p>
                        <Link prefetch={false} href="/book-consultation" className="inline-flex w-full items-center justify-center bg-problue text-white px-4 py-3 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                          Book a Consultation
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Mega Menu */}
            <div 
              className="relative" 
              ref={industriesRef}
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button
                onClick={() => { setIndustriesOpen(!industriesOpen); setServicesOpen(false); }}
                className={`flex items-center gap-1 transition-colors py-8 ${isDark
                  ? (isActive("/industries") || industriesOpen ? "text-white" : "text-gray-300 hover:text-white")
                  : (isActive("/industries") || industriesOpen ? "text-problue" : "text-navy hover:text-problue")
                  }`}
              >
                Industries
                <ChevronDown className={`h-4 w-4 transition-transform ${industriesOpen ? "rotate-180" : ""}`} />
              </button>

              {industriesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-[80px] w-[600px] rounded-2xl bg-white text-navy border border-gray-200 shadow-2xl overflow-hidden p-8 animate-in fade-in slide-in-from-top-4 duration-200">
                  <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                    <h3 className="text-problue font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                      <Building2 className="h-5 w-5" />
                      Industries We Serve
                    </h3>
                    <Link prefetch={false} href="/industries" className="text-sm text-gray-500 hover:text-problue font-medium flex items-center">
                      View All <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {industriesMegaMenu.map((industry) => (
                      <Link
                        prefetch={false}
                        key={industry.href}
                        href={industry.href}
                        className="group p-4 rounded-xl border border-transparent hover:border-blue-100 hover:bg-blue-50/50 transition-all"
                      >
                        <h4 className="font-bold text-navy mb-1 group-hover:text-problue transition-colors">
                          {industry.label}
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {industry.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link prefetch={false} href="/portfolio" className={`transition-colors ${isDark ? (isActive("/portfolio") ? "text-white" : "text-gray-300 hover:text-white") : (isActive("/portfolio") ? "text-problue" : "text-navy hover:text-problue")}`}>Portfolio</Link>
            <Link prefetch={false} href="/contact" className={`transition-colors ${isDark ? (isActive("/contact") ? "text-white" : "text-gray-300 hover:text-white") : (isActive("/contact") ? "text-problue" : "text-navy hover:text-problue")}`}>Contact</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-problue text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors shadow-lg hover:shadow-problue/50"
            >
              Book a Consultation
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden transition-colors ${isDark ? "text-gray-300 hover:text-white" : "text-navy hover:text-problue"}`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-navy border-t border-gray-800 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-white hover:bg-gray-800 rounded-md">Home</Link>
            <Link href="/about" className="block px-4 py-2 text-white hover:bg-gray-800 rounded-md">About</Link>

            {/* Mobile Services */}
            <div>
              <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full flex items-center justify-between px-4 py-2 text-white hover:bg-gray-800 rounded-md">
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="px-4 py-2 space-y-4 bg-gray-900 rounded-md mt-1">
                  {servicesMegaMenu.map(category => (
                    <div key={category.category}>
                      <h4 className="text-problue text-xs uppercase tracking-wider font-bold mb-2">{category.category}</h4>
                      <div className="space-y-1">
                        {category.items.map(item => (
                          <Link key={item.href} href={item.href} className="block py-1 text-sm text-gray-300 hover:text-white">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="pt-2">
                    <Link href="/services" className="text-sm font-semibold text-problue hover:text-blue-400 flex items-center">
                      View All Services <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Industries */}
            <div>
              <button onClick={() => setIndustriesOpen(!industriesOpen)} className="w-full flex items-center justify-between px-4 py-2 text-white hover:bg-gray-800 rounded-md">
                Industries
                <ChevronDown className={`h-4 w-4 transition-transform ${industriesOpen ? "rotate-180" : ""}`} />
              </button>
              {industriesOpen && (
                <div className="px-4 py-2 space-y-1 bg-gray-900 rounded-md mt-1">
                  {industriesMegaMenu.map((industry) => (
                    <Link key={industry.href} href={industry.href} className="block px-4 py-2 text-sm text-gray-300 hover:text-white">
                      {industry.label}
                    </Link>
                  ))}
                  <Link href="/industries" className="block px-4 py-2 text-sm text-problue hover:text-blue-400">View All Industries</Link>
                </div>
              )}
            </div>

            <Link href="/portfolio" className="block px-4 py-2 text-white hover:bg-gray-800 rounded-md">Portfolio</Link>
            <Link href="/contact" className="block px-4 py-2 text-white hover:bg-gray-800 rounded-md">Contact</Link>

            <div className="pt-4 mt-2 border-t border-gray-800 px-4 pb-4">
              <Link href="/book-consultation" className="block w-full text-center px-4 py-3 bg-problue text-white rounded-md font-medium shadow-lg hover:bg-blue-700">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
