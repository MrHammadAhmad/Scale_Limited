import codecs

content = """\"use client\";

import Link from \"next/link\";
import { motion } from \"framer-motion\";
import { Button } from \"@/components/ui/button\";
import {
  ArrowRight,
  Globe,
  Users,
  Cpu,
  Briefcase,
  CheckCircle2,
  MapPin,
  MonitorSmartphone,
  HeartPulse,
  Wallet,
  ShoppingCart,
  Quote
} from \"lucide-react\";

const services = [
  {
    id: \"01\",
    title: \"Staff Augmentation\",
    description: \"Access skilled professionals and flexible teams that extend your capabilities without the complexity of traditional hiring.\",
    icon: Users,
    href: \"/services/staff-augmentation\",
  },
  {
    id: \"02\",
    title: \"Business Process Outsourcing\",
    description: \"Streamline operations by outsourcing critical business processes to a reliable and scalable delivery team.\",
    icon: Briefcase,
    href: \"/services/bpo\",
  },
  {
    id: \"03\",
    title: \"Technology & AI Solutions\",
    description: \"Build smarter, more efficient operations with modern software, automation, AI, and technology solutions.\",
    icon: Cpu,
    href: \"/services/technology-ai\",
  }
];

const reasons = [
  {
    title: \"Global Reach\",
    description: \"Supporting businesses across Canada, USA, and Australia with local compliance and global talent.\",
  },
  {
    title: \"Flexible Scaling\",
    description: \"Adapt your team and operations as your business requirements evolve without long-term commitments.\",
  },
  {
    title: \"Quality-Focused Delivery\",
    description: \"Professional teams and structured processes built around your specific business outcomes.\",
  },
  {
    title: \"Technology-Driven\",
    description: \"Modern technology and AI integration help improve efficiency and scalability across your operations.\",
  },
  {
    title: \"Client-Centric Approach\",
    description: \"Solutions designed around each client's specific goals, challenges, and company culture.\",
  },
  {
    title: \"Long-Term Partnership\",
    description: \"We aim to become an extension of your business, not just another vendor.\",
  },
];

const locations = [
  {
    country: \"Canada\",
    description: \"North American headquarters and strategic delivery center.\",
    position: \"top-1/4 left-1/4\",
  },
  {
    country: \"USA\",
    description: \"Supporting clients across major US tech and business hubs.\",
    position: \"top-1/3 left-1/4 translate-x-12 translate-y-8\",
  },
  {
    country: \"Australia\",
    description: \"APAC regional operations and support center.\",
    position: \"bottom-1/4 right-1/4\",
  },
];

const industries = [
  {
    name: \"Technology\",
    icon: MonitorSmartphone,
    description: \"Engineering talent and operational scale for high-growth tech companies.\",
    href: \"/industries/technology\",
  },
  {
    name: \"Healthcare\",
    icon: HeartPulse,
    description: \"Secure, reliable support and technology solutions for healthcare organizations.\",
    href: \"/industries/healthcare\",
  },
  {
    name: \"Finance\",
    icon: Wallet,
    description: \"Modernizing operations and enhancing customer experience for financial institutions.\",
    href: \"/industries/finance\",
  },
  {
    name: \"E-commerce\",
    icon: ShoppingCart,
    description: \"Scaling customer support and operational logistics for retail brands.\",
    href: \"/industries/e-commerce\",
  },
];

const projects = [
  {
    title: \"Enterprise E-commerce Migration\",
    category: \"Technology & AI Solutions\",
    industry: \"E-commerce\",
    image: \"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop\",
    href: \"/portfolio/enterprise-ecommerce-migration\",
  },
  {
    title: \"Scaling QA Operations\",
    category: \"Staff Augmentation\",
    industry: \"Finance\",
    image: \"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop\",
    href: \"/portfolio/scaling-qa-fintech\",
  },
];

const testimonials = [
  {
    name: \"Sarah Jenkins\",
    position: \"CTO\",
    company: \"TechFlow Innovations\",
    content: \"Scale Limited provided us with an exceptional engineering team that integrated seamlessly with our in-house developers. They delivered high-quality code and helped us launch two months ahead of schedule.\",
  },
  {
    name: \"Michael Chen\",
    position: \"Operations Director\",
    company: \"Global Retail Group\",
    content: \"Outsourcing our customer support to Scale Limited was one of the best operational decisions we've made. The transition was smooth, and our customer satisfaction scores have never been higher.\",
  }
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className=\"relative overflow-hidden bg-navy text-white pb-20 pt-24 sm:pt-32 lg:pb-32\">
        {/* Background decoration */}
        <div className=\"absolute inset-0 overflow-hidden pointer-events-none\">
          <div className=\"absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-b from-problue/20 to-transparent blur-3xl opacity-50\" />
        </div>

        <div className=\"container mx-auto px-4 sm:px-6 lg:px-8 relative z-10\">
          <div className=\"max-w-4xl\">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className=\"text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6\">
                Scale Your Business With the Right <span className=\"text-problue\">People, Processes & Technology</span>
              </h1>
              <p className=\"mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl\">
                Scale Limited helps businesses grow through flexible staffing, reliable business process outsourcing, and technology-driven solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=\"mt-10 flex flex-col sm:flex-row gap-4\"
            >
              <Button asChild size=\"lg\" className=\"text-base h-12 px-8\">
                <Link href=\"/book-consultation\">
                  Book a Consultation
                  <ArrowRight className=\"ml-2 h-4 w-4\" />
                </Link>
              </Button>
              <Button asChild size=\"lg\" variant=\"outline\" className=\"text-base h-12 px-8 bg-transparent text-white border-gray-600 hover:bg-gray-800 hover:text-white\">
                <Link href=\"/services\">Explore Our Services</Link>
              </Button>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className=\"mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-gray-800\"
          >
            <div className=\"flex items-center gap-3\">
              <Globe className=\"h-6 w-6 text-problue\" />
              <span className=\"text-sm font-medium text-gray-300\">Global Presence</span>
            </div>
            <div className=\"flex items-center gap-3\">
              <Users className=\"h-6 w-6 text-problue\" />
              <span className=\"text-sm font-medium text-gray-300\">Flexible Solutions</span>
            </div>
            <div className=\"flex items-center gap-3\">
              <Cpu className=\"h-6 w-6 text-problue\" />
              <span className=\"text-sm font-medium text-gray-300\">Technology-Driven</span>
            </div>
            <div className=\"flex items-center gap-3\">
              <svg className=\"h-6 w-6 text-problue\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\">
                <path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\" />
              </svg>
              <span className=\"text-sm font-medium text-gray-300\">Client-Focused</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ServicesPreview */}
      <section className=\"py-24 bg-gray-50\">
        <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"max-w-3xl mb-16\">
            <h2 className=\"text-3xl font-bold tracking-tight text-navy sm:text-4xl mb-4\">
              Solutions Built Around Your Growth
            </h2>
            <p className=\"text-lg text-gray-600\">
              We provide specialized teams, manage critical operations, and build custom technology to help your business scale efficiently.
            </p>
          </div>

          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className=\"group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full\"
                >
                  <div className=\"mb-6 flex justify-between items-start\">
                    <div className=\"h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-problue\">
                      <Icon className=\"h-6 w-6\" />
                    </div>
                    <span className=\"text-4xl font-light text-gray-200 group-hover:text-problue/20 transition-colors\">
                      {service.id}
                    </span>
                  </div>

                  <h3 className=\"text-xl font-bold text-navy mb-4\">{service.title}</h3>
                  <p className=\"text-gray-600 mb-8 flex-grow\">{service.description}</p>

                  <Link
                    href={service.href}
                    className=\"inline-flex items-center text-problue font-medium group-hover:text-blue-700 transition-colors mt-auto\"
                  >
                    Explore {service.title}
                    <ArrowRight className=\"ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform\" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WhyChooseUs */}
      <section className=\"py-24 bg-white\">
        <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"flex flex-col lg:flex-row gap-16\">
            <div className=\"lg:w-1/3\">
              <div className=\"sticky top-24\">
                <h2 className=\"text-3xl font-bold tracking-tight text-navy sm:text-4xl mb-6\">
                  Why Businesses Choose Scale Limited
                </h2>
                <p className=\"text-lg text-gray-600 mb-8\">
                  We combine global talent with strict quality control and modern technology to deliver results that help you scale.
                </p>
                <div className=\"w-20 h-1 bg-problue rounded-full\"></div>
              </div>
            </div>

            <div className=\"lg:w-2/3\">
              <div className=\"grid grid-cols-1 sm:grid-cols-2 gap-8\">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className=\"flex gap-4\"
                  >
                    <div className=\"flex-shrink-0 mt-1\">
                      <CheckCircle2 className=\"h-6 w-6 text-problue\" />
                    </div>
                    <div>
                      <h3 className=\"text-xl font-semibold text-navy mb-2\">{reason.title}</h3>
                      <p className=\"text-gray-600\">{reason.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GlobalPresence */}
      <section className=\"py-24 bg-navy text-white overflow-hidden\">
        <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-center max-w-3xl mx-auto mb-16\">
            <h2 className=\"text-3xl font-bold tracking-tight sm:text-4xl mb-4\">
              Built for a Global Market
            </h2>
            <p className=\"text-lg text-gray-400\">
              Providing distributed teams and seamless operational support across North America and Asia-Pacific.
            </p>
          </div>

          <div className=\"relative w-full max-w-5xl mx-auto aspect-[2/1] bg-navy-900 rounded-2xl border border-gray-800 flex items-center justify-center p-8 overflow-hidden\">
            <div className=\"absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain mix-blend-screen\" />

            <svg className=\"absolute inset-0 w-full h-full opacity-30\" preserveAspectRatio=\"none\">
              <path d=\"M 25% 25% Q 30% 50% 75% 75%\" fill=\"none\" stroke=\"#2563EB\" strokeWidth=\"1\" strokeDasharray=\"5,5\" className=\"animate-pulse\" />
              <path d=\"M 25% 25% Q 30% 30% 28% 38%\" fill=\"none\" stroke=\"#2563EB\" strokeWidth=\"1\" strokeDasharray=\"5,5\" className=\"animate-pulse\" />
            </svg>

            {locations.map((loc, index) => (
              <motion.div
                key={loc.country}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={\`absolute \${loc.position} flex flex-col items-center group\`}
              >
                <div className=\"relative\">
                  <div className=\"absolute inset-0 bg-problue rounded-full animate-ping opacity-75\"></div>
                  <div className=\"relative bg-problue text-white p-2 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]\">
                    <MapPin className=\"h-5 w-5\" />
                  </div>
                </div>
                <div className=\"mt-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-4 w-48 text-center opacity-0 group-hover:opacity-100 transition-opacity absolute top-full z-10 pointer-events-none\">
                  <h4 className=\"font-bold text-white mb-1\">{loc.country}</h4>
                  <p className=\"text-xs text-gray-400\">{loc.description}</p>
                </div>
                <span className=\"mt-2 font-semibold text-sm bg-gray-900/50 px-2 py-1 rounded md:hidden\">{loc.country}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IndustriesPreview */}
      <section className=\"py-24 bg-gray-50\">
        <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6\">
            <div className=\"max-w-2xl\">
              <h2 className=\"text-3xl font-bold tracking-tight text-navy sm:text-4xl mb-4\">
                Supporting Businesses Across Industries
              </h2>
              <p className=\"text-lg text-gray-600\">
                We bring specialized knowledge and tailored solutions to meet the unique challenges of your sector.
              </p>
            </div>
            <Link href=\"/industries\" className=\"inline-flex items-center text-problue font-medium hover:text-blue-700 transition-colors whitespace-nowrap\">
              View All Industries
              <ArrowRight className=\"ml-2 h-4 w-4\" />
            </Link>
          </div>

          <div className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6\">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={industry.href}
                    className=\"group block bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 h-full\"
                  >
                    <div className=\"h-12 w-12 rounded-lg bg-gray-50 flex items-center justify-center text-navy mb-6 group-hover:bg-blue-50 group-hover:text-problue transition-colors\">
                      <Icon className=\"h-6 w-6\" />
                    </div>
                    <h3 className=\"text-xl font-semibold text-navy mb-3 group-hover:text-problue transition-colors\">{industry.name}</h3>
                    <p className=\"text-gray-600 text-sm\">{industry.description}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PortfolioPreview */}
      <section className=\"py-24 bg-white\">
        <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-center max-w-3xl mx-auto mb-16\">
            <h2 className=\"text-3xl font-bold tracking-tight text-navy sm:text-4xl mb-4\">
              Results That Build Trust
            </h2>
            <p className=\"text-lg text-gray-600\">
              See how we've helped businesses scale their operations, build better technology, and grow their teams.
            </p>
          </div>

          <div className=\"grid grid-cols-1 md:grid-cols-2 gap-8 mb-12\">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Link href={project.href} className=\"group block\">
                  <div className=\"relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 bg-gray-100\">
                    <img
                      src={project.image}
                      alt={project.title}
                      className=\"object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700\"
                    />
                    <div className=\"absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500\" />
                  </div>
                  <div className=\"flex items-center gap-3 mb-3 text-sm font-medium\">
                    <span className=\"text-problue\">{project.category}</span>
                    <span className=\"text-gray-300\">•</span>
                    <span className=\"text-gray-500\">{project.industry}</span>
                  </div>
                  <h3 className=\"text-2xl font-bold text-navy group-hover:text-problue transition-colors\">
                    {project.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className=\"text-center\">
            <Link
              href=\"/portfolio\"
              className=\"inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md text-base font-medium text-navy hover:bg-gray-50 transition-colors\"
            >
              View All Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className=\"py-24 bg-gray-50 border-t border-gray-200\">
        <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-center max-w-3xl mx-auto mb-16\">
            <h2 className=\"text-3xl font-bold tracking-tight text-navy sm:text-4xl mb-4\">
              What Our Clients Say
            </h2>
            <p className=\"text-lg text-gray-600\">
              Don't just take our word for it. Here's how we've helped businesses achieve their operational goals.
            </p>
          </div>

          <div className=\"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto\">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className=\"bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col relative\"
              >
                <Quote className=\"absolute top-8 right-8 h-12 w-12 text-blue-50\" />
                <p className=\"text-gray-600 text-lg mb-8 relative z-10 italic flex-grow\">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className=\"flex items-center gap-4 mt-auto\">
                  <div className=\"h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-problue font-bold text-lg\">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className=\"font-bold text-navy\">{testimonial.name}</h4>
                    <p className=\"text-sm text-gray-500\">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTASection */}
      <section className=\"py-24 bg-problue text-white relative overflow-hidden\">
        <div className=\"absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl\"></div>
        <div className=\"absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-navy opacity-10 rounded-full blur-3xl\"></div>

        <div className=\"container mx-auto px-4 sm:px-6 lg:px-8 relative z-10\">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className=\"max-w-3xl mx-auto text-center\"
          >
            <h2 className=\"text-3xl font-bold tracking-tight sm:text-5xl mb-6\">
              Ready to Scale What Comes Next?
            </h2>
            <p className=\"text-lg sm:text-xl text-blue-100 mb-10\">
              Tell us what you're trying to achieve. Our team will help you explore the right people, processes, and technology for your business.
            </p>
            <div className=\"flex flex-col sm:flex-row justify-center gap-4\">
              <Button asChild size=\"lg\" className=\"bg-white text-problue hover:bg-gray-100 h-14 px-8 text-lg font-semibold\">
                <Link href=\"/book-consultation\">Book a Consultation</Link>
              </Button>
              <Button asChild size=\"lg\" variant=\"outline\" className=\"border-white text-white hover:bg-white/10 h-14 px-8 text-lg font-semibold bg-transparent\">
                <Link href=\"/contact\">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
"""

with codecs.open('src/app/(marketing)/page.tsx', 'w', 'utf-8') as f:
    f.write(content)
