import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | Scale Limited",
  description: "Terms and conditions for using Scale Limited's website and services.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-navy text-white pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-300">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="prose prose-lg text-gray-600 max-w-none prose-headings:text-navy prose-a:text-problue">
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Scale Limited ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
            </p>
            
            <h2>2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
            </p>

            <h2>3. User Representations</h2>
            <p>
              By using the Site, you represent and warrant that:
            </p>
            <ul>
              <li>All registration information you submit will be true, accurate, current, and complete</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary</li>
              <li>You have the legal capacity and you agree to comply with these Terms and Conditions</li>
              <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise</li>
            </ul>

            <h2>4. Limitations of Liability</h2>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
            </p>
            <p>
              <Link href="mailto:legal@scalelimited.cc">legal@scalelimited.cc</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
