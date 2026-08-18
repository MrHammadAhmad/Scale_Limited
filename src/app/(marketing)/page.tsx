"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "@/components/ui/Typewriter";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Users,
  Cpu,
  Briefcase,
  CheckCircle2,
  MapPin,
  Quote,
  ShieldCheck,
  Search,
  Wrench,
  Rocket,
  TrendingUp,
  MonitorSmartphone,
  HeartPulse,
  Wallet,
  ShoppingCart,
  Store,
  Handshake,
  Clock,
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const serviceCategories = [
    {
      id: "staff-augmentation",
      title: "Staff Augmentation",
      description: "Dedicated developer teams and skilled professionals to scale your operations without traditional hiring overhead.",
      icon: Users,
      services: [
        "Full stack developers",
        "AI & ML engineers",
        "UI/UX Designers",
        "Customer support representatives",
        "Finance & accounting staff",
        "Operations & back office staff"
      ],
      href: "/services/staff-augmentation"
    },
    {
      id: "bpo",
      title: "Business Process Services",
      description: "Reliable outsourcing for critical business operations, allowing your core staff to focus on growth.",
      icon: Briefcase,
      services: [
        "Contact center",
        "Data entry & processing",
        "Sales & Lead generation"
      ],
      href: "/services/bpo"
    },
    {
      id: "tech",
      title: "Technology Services",
      description: "Custom software, web development, and intelligent automation built around your processes.",
      icon: Cpu,
      services: [
        "Web design & development",
        "Custom software development",
        "AI chatbots & virtual assistants"
      ],
      href: "/services/technology-ai"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gray-50/30 text-navy overflow-hidden pt-24 pb-12 lg:pt-24 lg:pb-16 min-h-[60vh] lg:min-h-[70vh] flex items-center">
        {/* Background abstract shapes */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[1000px] bg-navy -skew-x-[25deg] translate-x-48 hidden lg:block" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="max-w-2xl relative z-20 lg:ml-8 xl:ml-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/60 px-4 py-1.5 text-sm text-gray-700 mb-8 backdrop-blur-sm shadow-sm"
            >
              <ShieldCheck className="h-4 w-4 text-problue" />
              Trusted by businesses across Canada, USA & Australia
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] font-bold tracking-tight mb-6"
            >
              <motion.span variants={fadeInUp} className="block text-navy">Scale Your Business With</motion.span>
              <motion.span variants={fadeInUp} className="block mt-2 pb-2 h-[140px] md:h-[120px] lg:h-[140px]">
                <Typewriter
                  words={[
                    "Global Staffing Solutions",
                    "Reliable BPO Services",
                    "Intelligent AI & Automation",
                    "Custom Software Development"
                  ]}
                  typingSpeed={60}
                  deletingSpeed={30}
                  delayBetweenWords={1500}
                />
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-lg"
            >
              Scale Limited helps businesses accelerate growth and optimize operations through world-class offshore staffing, reliable BPO, and cutting-edge tech solutions.
            </motion.p>

            {/* Mobile Animated Image (Hidden on Desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex lg:hidden justify-center items-center z-10 my-10"
            >
              <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
                {/* Rotating Shapes Wrapper */}
                <div className="absolute inset-0 animate-[spin_24s_linear_infinite] pointer-events-none z-20">
                  <div className="absolute inset-0 -rotate-45">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-[4px] border-problue bg-white shadow-sm" />
                  </div>
                  <div className="absolute inset-0 rotate-[135deg]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-[4px] border-problue bg-white shadow-sm" />
                  </div>
                  <div className="absolute inset-0 rotate-12">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-[2px] border-gray-300/60" />
                  </div>
                  <div className="absolute inset-0 -rotate-[60deg]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-[2px] border-gray-300/60" />
                  </div>
                </div>
                {/* Main Circular Image */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-[8px] sm:border-[12px] border-white shadow-2xl bg-gray-100 z-10">
                  <Image
                    src="/heroimg.jpg"
                    alt="Scale your business"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/book-consultation"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md bg-problue hover:bg-blue-600 text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
              >
                Let&apos;s Talk
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md border border-gray-300 hover:bg-gray-50 text-navy transition-all hover:border-gray-400"
              >
                Explore Services
              </Link>
            </motion.div>

          </div>

            {/* Right Side - Animated Image (Desktop Only) */}
            <div className="relative hidden lg:flex justify-center items-center z-10 lg:-mt-24">
              <div className="relative lg:w-[550px] lg:h-[550px]">
                {/* Rotating Shapes Wrapper */}
                <div className="absolute inset-0 animate-[spin_24s_linear_infinite] pointer-events-none z-20">
                  {/* Thick blue ring 1 (top-left area) */}
                  <div className="absolute inset-0 -rotate-45">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-16 lg:h-16 rounded-full lg:border-[6px] border-problue bg-white shadow-sm" />
                  </div>

                  {/* Thick blue ring 2 (bottom-right area) */}
                  <div className="absolute inset-0 rotate-[135deg]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-16 lg:h-16 rounded-full lg:border-[6px] border-problue bg-white shadow-sm" />
                  </div>
                  
                  {/* Thin grey rings (floating outside) */}
                  <div className="absolute inset-0 rotate-12">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-12 lg:h-12 rounded-full border-[2px] border-gray-300/60" />
                  </div>
                  <div className="absolute inset-0 -rotate-[60deg]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-20 lg:h-20 rounded-full border-[2px] border-gray-300/60" />
                  </div>
                </div>
                
                {/* Main Circular Image */}
                <div className="absolute inset-0 rounded-full overflow-hidden lg:border-[16px] border-white shadow-2xl bg-gray-100 z-10">
                  <Image
                    src="/heroimg.jpg"
                    alt="Scale your business"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stat Strip */}
      <section className="bg-problue text-white py-8 border-y border-blue-500/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 md:divide-x md:divide-blue-300/40"
          >
            {[
              { value: "3", label: "Countries Served", icon: Globe },
              { value: "100+", label: "Clients Supported", icon: Users },
              { value: "24/7", label: "Delivery Coverage", icon: Clock },
              { value: "95%", label: "Client Retention", icon: ShieldCheck },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div key={idx} variants={fadeInUp} className="flex-1 flex flex-row items-center justify-center gap-3 px-6 w-full md:w-auto">
                  <Icon className="w-8 h-8 shrink-0 text-white/90" />
                  <div className="flex flex-row items-baseline gap-1.5 md:gap-2">
                    <span className="text-2xl md:text-3xl font-bold tracking-tight">{stat.value}</span>
                    <span className="text-base md:text-lg font-medium text-white/90">{stat.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-10 bg-gray-50 border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium tracking-wide text-navy uppercase mb-6">
            Built on Reliability, Transparency & Results
          </p>
          <div className="relative flex overflow-x-hidden">
            <motion.div
              className="flex whitespace-nowrap gap-12 text-gray-400"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-12 items-center">
                  {["Staff Augmentation", "Operations", "Technology", "AI & Automation", "Customer Support", "Web Development"].map((item) => (
                    <span key={item} className="text-xl font-bold uppercase tracking-wider text-navy">
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-navy text-white relative overflow-hidden rounded-[2.5rem] mx-4 md:mx-6 lg:mx-8 my-8">
        {/* subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-problue/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left — text content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-problue mb-4">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                Built to Help Businesses Scale
              </h2>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                Scale Limited is a global partner dedicated to removing the operational bottlenecks that hinder your company&apos;s growth. We provide specialized talent, streamline critical processes, and integrate intelligent technology solutions for clients across North America and APAC. Our mission is to seamlessly extend your capabilities so you can focus entirely on scaling your business.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-md bg-problue text-white hover:bg-blue-700 transition-colors shadow-lg"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            {/* Right — two people working on laptop photo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 h-[420px] relative">
                <Image
                  src="/pic2.png"
                  alt="Professional business woman in office"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* subtle dark overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 via-transparent to-transparent" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Comprehensive Services Section (Arbisoft-inspired layout) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-navy mb-6">
              Solutions Built Around Your Growth
            </h2>
            <p className="text-lg text-gray-600">
              We provide specialized teams, manage critical operations, and build custom
              technology to help your business scale efficiently.
            </p>
          </motion.div>

          <div className="space-y-12">
            {serviceCategories.map((category, idx) => {
              const Icon = category.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={category.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={staggerContainer}
                  className={`flex flex-col lg:flex-row gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'} p-8 md:p-12 rounded-3xl bg-gray-50/80 border border-gray-100 hover:border-blue-100 transition-colors group`}
                >
                  <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
                    <div className="h-16 w-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-problue border border-gray-100 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-navy mb-4">{category.title}</h3>
                    <p className="text-lg text-gray-600 mb-8">{category.description}</p>
                    <Link
                      href={category.href}
                      className="inline-flex items-center font-semibold text-problue hover:text-blue-700 transition-colors"
                    >
                      Explore {category.title} <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </motion.div>

                  <div className="w-full lg:w-1/2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {category.services.map((service, sIdx) => (
                        <motion.div
                          key={sIdx}
                          variants={fadeInUp}
                          whileHover={{ scale: 1.03, y: -2 }}
                          className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3"
                        >
                          <CheckCircle2 className="h-5 w-5 text-problue shrink-0 mt-0.5" />
                          <span className="text-gray-800 font-medium">{service}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Offerings tabs */}
      <section className="py-24 bg-navy text-white relative overflow-hidden rounded-[2.5rem] mx-4 md:mx-6 lg:mx-8 my-8">
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-problue to-purple-600 rounded-full blur-[100px]" />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              How Can We Work With You
            </h2>
            <p className="text-lg text-gray-400">
              From flexible staffing to full-scale technology builds, here&apos;s how we engage with your business at every stage.
            </p>
          </div>

          {/* 2-column: cards left, photos right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — numbered engagement model cards */}
            <div className="flex flex-col gap-6">
              {[
                {
                  num: "01",
                  title: "Staff Augmentation",
                  description: "Fill skills gaps fast by bringing in qualified professionals whenever you need them.",
                  icon: Users,
                },
                {
                  num: "02",
                  title: "Dedicated Teams",
                  description: "Get a fully committed team that integrates into your organization and workflows.",
                  icon: ShieldCheck,
                },
                {
                  num: "03",
                  title: "Managed Outsourcing",
                  description: "We run entire processes end-to-end, letting you focus on your core business.",
                  icon: Globe,
                },
              ].map((model, idx) => {
                const Icon = model.icon;
                return (
                  <motion.div
                    key={model.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.25 }}
                    className="flex items-start gap-5 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:border-problue/50 transition-colors group"
                  >
                    {/* Number badge */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-problue flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                      {model.num}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{model.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{model.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right — stacked real office photos */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="flex flex-col gap-4"
            >
              {/* Top photo — modern office team meeting */}
              <div className="rounded-2xl overflow-hidden h-56 w-full shadow-2xl relative">
                <Image
                  src="/pic3.png"
                  alt="Business professionals in a formal meeting around table"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Bottom photo — open plan office workers */}
              <div className="rounded-2xl overflow-hidden h-48 w-full shadow-2xl relative">
                <Image
                  src="/pic4.png"
                  alt="Corporate team discussion in modern office"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* How We Help Businesses Scale — Process Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/60 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-problue mb-4">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-navy mb-6">
              How We Help Businesses Scale
            </h2>
            <p className="text-lg text-gray-600">
              A clear, repeatable process that turns your business challenges into sustainable growth.
            </p>
          </motion.div>

          {/* 3-column layout: left cards | center image | right cards */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center lg:items-stretch max-w-6xl mx-auto">

            {/* Left column — steps 01 & 02 */}
            <div className="grid grid-rows-2 gap-6 h-full">
              {[
                {
                  step: "01",
                  title: "Understand",
                  description: "We start by deeply understanding your business — your goals, pain points, team structure, and growth targets. No guesswork, just clarity.",
                  icon: Search,
                },
                {
                  step: "02",
                  title: "Build",
                  description: "We design the right combination of people, processes, and technology tailored specifically to your needs and scale.",
                  icon: Wrench,
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="flex flex-col sm:flex-row items-start gap-5 p-7 rounded-3xl bg-white border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all group h-full"
                  >
                    <div className="flex-shrink-0 flex flex-col items-center gap-2">
                      <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center text-problue group-hover:bg-problue group-hover:text-white transition-colors duration-300">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="text-xs font-bold tracking-widest text-gray-300 uppercase">{item.step}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl md:text-2xl font-bold text-navy mb-2">
                        <span className="text-problue mr-2 font-extrabold">{item.step} —</span>{item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Center — image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="hidden lg:flex items-center justify-center"
            >
              {/* Outer glow ring */}
              <div className="relative w-96 xl:w-[420px] h-96 xl:h-[420px]">
                {/* Soft background circle behind image */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 via-purple-50 to-blue-50 scale-110 blur-sm" />
                {/* Yellow decorative dot */}
                <div className="absolute top-6 right-8 w-8 h-8 rounded-full bg-yellow-400 z-10" />
                {/* Decorative diamond outline */}
                <div className="absolute bottom-16 left-8 w-10 h-10 border-2 border-blue-300/60 rotate-45 z-10" />
                {/* Circle image */}
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white ring-2 ring-blue-100">
                  <Image
                    src="/pic1.png"
                    alt="How we help businesses scale"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right column — steps 03 & 04 */}
            <div className="grid grid-rows-2 gap-6 h-full">
              {[
                {
                  step: "03",
                  title: "Implement",
                  description: "We work alongside your team to deploy solutions seamlessly — minimising disruption and maximising speed to value.",
                  icon: Rocket,
                },
                {
                  step: "04",
                  title: "Scale",
                  description: "As your business grows, our solutions grow with you. We continuously optimise to keep you ahead of the curve.",
                  icon: TrendingUp,
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="flex flex-col sm:flex-row items-start gap-5 p-7 rounded-3xl bg-white border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all group h-full"
                  >
                    <div className="flex-shrink-0 flex flex-col items-center gap-2">
                      <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center text-problue group-hover:bg-problue group-hover:text-white transition-colors duration-300">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="text-xs font-bold tracking-widest text-gray-300 uppercase">{item.step}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl md:text-2xl font-bold text-navy mb-2">
                        <span className="text-problue mr-2 font-extrabold">{item.step} —</span>{item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-problue mb-4">Sectors We Support</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-navy mb-6">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              From fast-growing tech startups to established healthcare providers, we bring tailored expertise to every sector.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12"
          >
            {[
              { label: "Technology", icon: MonitorSmartphone, description: "Engineering talent & operational scale" },
              { label: "Healthcare", icon: HeartPulse, description: "Secure support & technology solutions" },
              { label: "Finance", icon: Wallet, description: "Modern operations & customer experience" },
              { label: "E-commerce", icon: ShoppingCart, description: "Customer support & logistics" },
              { label: "Retail", icon: Store, description: "Operational efficiency at scale" },
              { label: "Professional Services", icon: Handshake, description: "Back-office & process excellence" },
            ].map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.label}
                  variants={fadeInUp}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group flex flex-col items-center text-center p-7 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-blue-50 hover:border-blue-100 hover:shadow-md transition-all cursor-default"
                >
                  <div className="h-14 w-14 rounded-xl bg-white flex items-center justify-center text-navy group-hover:bg-problue group-hover:text-white shadow-sm transition-colors duration-300 mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-1 group-hover:text-problue transition-colors">{industry.label}</h3>
                  <p className="text-gray-500 text-sm leading-snug">{industry.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-gray-500 mb-6">Don&apos;t see your industry? We work across many more sectors.</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 font-semibold text-problue hover:text-blue-700 transition-colors"
            >
              Get in touch <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-5xl mb-6">
              Built for a Global Market
            </h2>
            <p className="text-lg text-gray-600">
              Providing distributed teams and seamless operational support across North America
              and Asia-Pacific.
            </p>
          </motion.div>

          <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] bg-navy rounded-3xl border border-gray-800 shadow-2xl flex items-center justify-center p-8 overflow-hidden group">
            <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity bg-[url('/world-map.svg')] bg-no-repeat bg-center bg-contain brightness-0 invert" />

            {[
              { country: "Canada", description: "North American headquarters.", top: "18%", left: "23%", delay: 0.2 },
              { country: "USA", description: "Supporting US tech hubs.", top: "22%", left: "25%", delay: 0.4 },
              { country: "Australia", description: "APAC regional operations.", top: "63%", left: "81%", delay: 0.6 },
            ].map((loc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: loc.delay }}
                className="absolute flex flex-col items-center group/pin cursor-pointer"
                style={{ top: loc.top, left: loc.left }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-problue rounded-full animate-ping opacity-60"></div>
                  <div className="relative bg-problue text-white p-2.5 rounded-full shadow-lg group-hover/pin:scale-110 transition-transform">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 bg-navy text-white backdrop-blur-sm rounded-xl p-4 w-48 text-center opacity-0 group-hover/pin:opacity-100 transition-opacity absolute top-full z-10 pointer-events-none shadow-xl">
                  <h4 className="font-bold text-white mb-1">{loc.country}</h4>
                  <p className="text-xs text-gray-300">{loc.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Quote className="h-16 w-16 text-blue-100 mx-auto mb-8" />
            <p className="text-3xl md:text-4xl font-medium text-navy leading-snug mb-10">
              &quot;Scale Limited plugged into our operations quickly and gave us the flexibility
              to grow without the overhead of building every team in-house.&quot;
            </p>
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg text-navy">Operations Director</span>
              <span className="text-problue font-medium">Client Partner</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-problue text-white relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 -mt-20 -mr-20 w-[40rem] h-[40rem] bg-white opacity-5 rounded-full blur-3xl pointer-events-none"
        ></motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[40rem] h-[40rem] bg-navy opacity-10 rounded-full blur-3xl pointer-events-none"
        ></motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Ready to Scale What Comes Next?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl sm:text-2xl text-blue-100 mb-12">
              Tell us what you&apos;re trying to achieve. Our team will help you explore the
              right people, processes, and technology for your business.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white text-problue hover:bg-gray-100 h-16 px-10 text-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Book a Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-white text-white hover:bg-white/10 h-16 px-10 text-xl font-bold bg-transparent hover:scale-105"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}