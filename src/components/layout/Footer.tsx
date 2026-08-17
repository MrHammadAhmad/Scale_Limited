import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 relative w-[220px] h-[64px]">
              <Image 
                src="/logo-white.png" 
                alt="Scale Limited Logo" 
                width={1073} 
                height={375} 
                className="w-full h-full object-contain absolute left-0"
              />
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Helping businesses grow through flexible staffing, reliable business process outsourcing, and technology-driven solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/staff-augmentation" className="text-gray-400 hover:text-white transition-colors">
                  Staff Augmentation
                </Link>
              </li>
              <li>
                <Link href="/services/bpo" className="text-gray-400 hover:text-white transition-colors">
                  BPO
                </Link>
              </li>
              <li>
                <Link href="/services/technology-ai" className="text-gray-400 hover:text-white transition-colors">
                  Technology & AI
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary hover:text-blue-400 transition-colors">
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-400 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="mailto:info@scalelimited.cc" className="hover:text-white transition-colors">
                  info@scalelimited.cc
                </a>
              </li>
              <li>
                <a href="tel:+16478709695" className="hover:text-white transition-colors">
                  +1 6478709695
                </a>
              </li>
              <li>Canada • USA • Australia</li>
              <li className="pt-4">
                <Button asChild className="w-full">
                  <Link href="/book-consultation">Book a Consultation</Link>
                </Button>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Scale Limited. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
