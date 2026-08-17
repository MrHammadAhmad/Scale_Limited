"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowRight, Building2, Briefcase, Cpu, Users } from "lucide-react";
//smaple comment
const servicesMegaMenu = [
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
    category: "Staff Augmentation",
    icon: Users,
    items: [
      { label: "Customer Support Reps", href: "/services/customer-support" },
      { label: "Finance & Accounting", href: "/services/finance-accounting" },
      { label: "Operations & Back Office", href: "/services/operations-back-office" },
      { label: "", href: "#spacer" },
      { label: "Full Stack Developers", href: "/services/full-stack-developers" },
      { label: "AI & ML Engineers", href: "/services/ai-ml-engineers" },
      { label: "UI/UX Designers", href: "/services/ui-ux-designers" },
    ]
  },
  {
    category: "Technology Solutions",
    icon: Cpu,
    items: [
      { label: "Web Design & Development", href: "/services/web-design-development" },
      { label: "Custom Software", href: "/services/custom-software" },
      { label: "AI Chatbots & Assistants", href: "/services/ai-chatbots" },
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
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (mobileMenuRef.current && mobileMenuRef.current.contains(target)) {
        return;
      }
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setServicesOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(target)) {
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
                className={`flex items-center gap-1 transition-colors h-20 ${isDark
                  ? (isActive("/services") || servicesOpen ? "text-white" : "text-gray-300 hover:text-white")
                  : (isActive("/services") || servicesOpen ? "text-problue" : "text-navy hover:text-problue")
                  }`}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="fixed left-0 top-[80px] w-full shadow-2xl border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Background Split */}
                  <div className="absolute inset-0 flex pointer-events-none">
                    <div className="flex-grow bg-white"></div>
                    <div className="w-[30%] lg:w-[35%] bg-navy"></div>
                  </div>
                  
                  {/* Content Container */}
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex">
                    {/* Left: Links */}
                    <div className="flex-grow py-12 pr-12 grid grid-cols-3 gap-12 bg-white">
                      {servicesMegaMenu.map((col) => {
                        return (
                          <div key={col.category}>
                            <h3 className="text-navy font-bold text-lg mb-6 inline-block border-b-2 border-problue pb-2">
                              {col.category}
                            </h3>
                            <ul className="space-y-4">
                              {col.items.map((item, idx) => (
                                item.label === "" ? (
                                  <li key={`spacer-${idx}`} className="h-2" aria-hidden="true" />
                                ) : (
                                  <li key={item.href}>
                                    <Link
                                      prefetch={false}
                                      href={item.href}
                                      className="text-gray-500 hover:text-problue transition-colors text-sm font-medium block"
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                )
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                    {/* Right: Promo */}
                    <div className="w-[30%] lg:w-[35%] bg-navy relative p-12 flex flex-col justify-center text-white overflow-hidden">
                      <Image src="/heroimg.jpg" fill className="object-cover opacity-20 mix-blend-screen" alt="" />
                      <div className="relative z-10">
                        <div className="text-5xl font-bold mb-4 text-white">95%</div>
                        <p className="text-lg text-blue-100 mb-8 font-medium">Client retention rate across our global operations.</p>
                        <Link prefetch={false} href="/book-consultation" className="inline-flex items-center text-white font-bold hover:text-blue-300 transition-colors">
                          Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
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
                className={`flex items-center gap-1 transition-colors h-20 ${isDark
                  ? (isActive("/industries") || industriesOpen ? "text-white" : "text-gray-300 hover:text-white")
                  : (isActive("/industries") || industriesOpen ? "text-problue" : "text-navy hover:text-problue")
                  }`}
              >
                Industries
                <ChevronDown className={`h-4 w-4 transition-transform ${industriesOpen ? "rotate-180" : ""}`} />
              </button>

              {industriesOpen && (
                <div className="fixed left-0 top-[80px] w-full shadow-2xl border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="absolute inset-0 flex pointer-events-none">
                    <div className="flex-grow bg-white"></div>
                    <div className="w-[30%] lg:w-[35%] bg-navy"></div>
                  </div>
                  
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex">
                    <div className="flex-grow py-12 pr-12 bg-white">
                      <h3 className="text-navy font-bold text-lg mb-8 inline-block border-b-2 border-problue pb-2">
                        Industries We Serve
                      </h3>
                      <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                        {industriesMegaMenu.map((industry) => (
                          <Link
                            prefetch={false}
                            key={industry.href}
                            href={industry.href}
                            className="group block"
                          >
                            <h4 className="font-bold text-navy mb-2 group-hover:text-problue transition-colors">
                              {industry.label}
                            </h4>
                            <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                              {industry.desc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    <div className="w-[30%] lg:w-[35%] bg-navy relative p-12 flex flex-col justify-center text-white overflow-hidden">
                      <Image src="/pic2.png" fill className="object-cover opacity-20 mix-blend-screen" alt="" />
                      <div className="relative z-10">
                        <div className="text-4xl font-bold mb-4 text-white">Domain Expertise</div>
                        <p className="text-lg text-blue-100 mb-8 font-medium">We bring specialized knowledge tailored to your sector's unique challenges.</p>
                        <Link prefetch={false} href="/industries" className="inline-flex items-center text-white font-bold hover:text-blue-300 transition-colors">
                          Explore Industries <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </div>
                    </div>
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
        <div ref={mobileMenuRef} className="lg:hidden absolute top-full left-0 w-full bg-navy border-t border-gray-800 shadow-xl max-h-[80vh] overflow-y-auto">
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
