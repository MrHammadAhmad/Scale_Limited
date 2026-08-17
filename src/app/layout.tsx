import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Scale Limited | Staff Augmentation, BPO & Tech Solutions",
    template: "%s | Scale Limited",
  },
  description: "Scale Limited helps businesses grow through flexible staffing, reliable business process outsourcing, and technology-driven solutions.",
  keywords: ["staff augmentation", "bpo", "technology solutions", "ai solutions", "business outsourcing"],
  openGraph: {
    title: "Scale Limited",
    description: "Scale Limited helps businesses grow through flexible staffing, reliable business process outsourcing, and technology-driven solutions.",
    url: "https://scalelimited.cc",
    siteName: "Scale Limited",
    locale: "en_US",
    type: "website",
  },
};

import NextTopLoader from 'nextjs-toploader';
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">
        <NextTopLoader color="#0F172A" showSpinner={false} height={3} />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
