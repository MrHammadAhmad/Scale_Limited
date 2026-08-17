import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Scale Limited",
  description: "Privacy Policy and data protection guidelines for Scale Limited.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-navy text-white pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-300">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="prose prose-lg text-gray-600 max-w-none prose-headings:text-navy prose-a:text-problue">
            <h2>1. Introduction</h2>
            <p>
              At Scale Limited ("we," "us," or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            
            <h2>2. Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul>
              <li>Request a consultation or submit a contact form</li>
              <li>Subscribe to our communications</li>
              <li>Interact with our website and services</li>
            </ul>
            <p>
              The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>
              We use personal information collected via our website for a variety of business purposes described below:
            </p>
            <ul>
              <li>To provide, operate, and maintain our website and services</li>
              <li>To improve, personalize, and expand our website</li>
              <li>To understand and analyze how you use our website</li>
              <li>To develop new products, services, features, and functionality</li>
              <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>To send you emails and process inquiries</li>
            </ul>

            <h2>4. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p>
              <Link href="mailto:privacy@scalelimited.cc">privacy@scalelimited.cc</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
