import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Briefcase, Cpu, ShieldCheck, Globe, Zap, TrendingUp, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Scale Limited",
  description: "Flexible solutions for a changing business. Explore our staff augmentation, BPO, and technology solutions.",
};

const services = [
  {
    id: "staff-augmentation",
    title: "Staff Augmentation",
    icon: Users,
    description: "Access skilled professionals and flexible teams that extend your capabilities without the complexity of traditional hiring. From developers to specialized engineers, we provide talent that matches your culture and technical needs.",
    benefits: [
      "Faster access to global talent",
      "Flexible team scaling up or down",
      "Reduced HR & hiring complexity",
      "Specialized domain expertise",
      "Faster project delivery timelines"
    ],
  },
  {
    id: "bpo",
    title: "Business Process Outsourcing",
    description: "Streamline your daily operations by outsourcing critical, time-consuming business processes to a reliable and scalable delivery team. Focus your in-house team on core strategic growth.",
    icon: Briefcase,
    benefits: [
      "24/7 Customer Support & Care",
      "Data entry and processing",
      "Finance and accounting operations",
      "Sales and lead generation",
      "Administrative back-office operations"
    ],
  },
  {
    id: "technology-ai",
    title: "Technology & AI Solutions",
    icon: Cpu,
    description: "Build smarter, more efficient operations with modern software, automation, and AI. We architect solutions that give you a competitive edge in a digital-first world.",
    benefits: [
      "Custom web & mobile software",
      "AI chatbots & intelligent assistants",
      "Automation workflows & integrations",
      "Data engineering & BI analytics",
      "End-to-end digital transformation"
    ],
  }
];

const whyChooseUs = [
  {
    title: "Global Talent Pool",
    description: "Access top-tier professionals vetted for skills, communication, and cultural fit, ready to integrate seamlessly into your team.",
    icon: Globe,
  },
  {
    title: "Data Security & Compliance",
    description: "Enterprise-grade security protocols, strict NDA enforcement, and compliance with international data protection standards.",
    icon: ShieldCheck,
  },
  {
    title: "Seamless Integration",
    description: "Our teams and technology plug directly into your existing workflows, ensuring zero disruption to your daily operations.",
    icon: Zap,
  },
  {
    title: "Unmatched Scalability",
    description: "Scale your resources up or down rapidly based on market demands, seasonal peaks, or evolving project requirements.",
    icon: TrendingUp,
  }
];

const faqs = [
  {
    q: "How fast can you deploy a team for my project?",
    a: "Depending on the complexity and skill requirements, we can deploy standard operational teams within 1-2 weeks, and specialized tech talent within 2-4 weeks."
  },
  {
    q: "Do you offer flexible pricing models?",
    a: "Yes, we offer hourly, project-based, and dedicated monthly resource models tailored to your specific budget and operational needs."
  },
  {
    q: "How do you handle time zone differences?",
    a: "We provide 24/7 global coverage. We can align our team's working hours to perfectly overlap with your local time zone or provide asynchronous support."
  },
  {
    q: "Who manages the augmented staff?",
    a: "You have direct operational control. We handle all HR, payroll, infrastructure, and retention, while your dedicated team reports directly to your management."
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-navy text-white pt-32 pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-problue rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Comprehensive Solutions to <span className="text-problue">Scale Your Business</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Scale Limited provides the people, processes, and technology you need to overcome operational bottlenecks, reduce costs, and drive exponential growth.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 1;
              
              return (
                <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
                  <div className="w-full lg:w-1/2">
                    <div className="aspect-[4/3] bg-gray-50 rounded-3xl flex items-center justify-center p-12 border border-gray-100 shadow-sm relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="h-40 w-40 rounded-full bg-white shadow-xl shadow-blue-900/5 flex items-center justify-center text-problue relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                        <Icon className="h-20 w-20" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-problue bg-blue-50 mb-6">
                      Service {index + 1}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                    
                    <h3 className="font-bold text-navy mb-5 text-lg">Key Deliverables:</h3>
                    <ul className="space-y-4 mb-10">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-gray-600">
                          <CheckCircle2 className="h-6 w-6 text-problue mr-3 flex-shrink-0" />
                          <span className="text-lg">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={`/services/${service.id}`}
                      className="inline-flex items-center justify-center px-8 py-4 bg-navy text-white font-semibold rounded-lg hover:bg-problue transition-colors shadow-lg hover:shadow-problue/30"
                    >
                      Explore {service.title}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl mb-4">
              Why Partner with Scale Limited?
            </h2>
            <p className="text-lg text-gray-600">
              We go beyond just providing services—we become an extension of your business, committed to your long-term success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {whyChooseUs.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex flex-col sm:flex-row gap-6 p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-2xl bg-blue-50 text-problue flex items-center justify-center shadow-inner">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl mb-4">
              Our Engagement Process
            </h2>
            <p className="text-lg text-gray-600">
              A structured, transparent approach to ensure we deliver exactly what your business needs from day one.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "01", title: "Discover", desc: "We analyze your business challenges, operational bottlenecks, and ultimate goals." },
              { id: "02", title: "Plan", desc: "We architect the right mix of people, process mapping, and technology." },
              { id: "03", title: "Deploy", desc: "We onboard your dedicated team or implement your custom technology solution." },
              { id: "04", title: "Scale", desc: "We continuously monitor performance, optimize processes, and expand capabilities." },
            ].map((step, idx) => (
              <div key={step.id} className="relative group">
                {idx !== 3 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gray-100 group-hover:bg-blue-100 transition-colors" />
                )}
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 text-center relative z-10 h-full flex flex-col items-center group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="h-20 w-20 bg-white shadow-md text-problue rounded-full flex items-center justify-center text-2xl font-black mb-8 border-4 border-gray-50 group-hover:border-blue-50 transition-colors">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about partnering with Scale Limited.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-gray-200 transition-colors">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-start gap-4">
                  <span className="text-problue font-black mt-1">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed pl-8 border-l-2 border-gray-100 ml-2">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[30rem] h-[30rem] bg-problue rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[30rem] h-[30rem] bg-blue-400 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8 leading-tight">
              Ready to Transform Your <span className="text-blue-300">Operations?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Tell us what you're trying to achieve. Our team will help you explore the right people, processes, and technology for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-xl bg-problue text-white hover:bg-blue-600 h-16 px-10 text-lg font-bold shadow-xl shadow-problue/20 transition-all hover:-translate-y-1">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border-2 border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 h-16 px-10 text-lg font-bold transition-all hover:-translate-y-1">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
