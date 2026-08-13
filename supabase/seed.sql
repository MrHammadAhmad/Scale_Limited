-- Scale Limited - Supabase Seed Data

-- Insert Demo Services
INSERT INTO public.services (title, slug, short_description, description, benefits, capabilities, published) VALUES
('Staff Augmentation', 'staff-augmentation', 'Access skilled professionals and flexible teams that extend your capabilities without the complexity of traditional hiring.', 'Our staff augmentation services allow you to scale your team quickly with vetted professionals. Whether you need specialized technical skills, project managers, or operational support, we provide dedicated talent that integrates seamlessly into your existing workflows.', ARRAY['Faster access to talent', 'Flexible team scaling', 'Reduced hiring complexity', 'Specialized expertise', 'Faster project delivery'], ARRAY['Software Engineers', 'QA Analysts', 'Project Managers', 'Designers'], true),
('Business Process Outsourcing', 'bpo', 'Streamline operations by outsourcing critical business processes to a reliable and scalable delivery team.', 'Scale Limited BPO solutions are designed to handle your back-office, customer support, and administrative operations efficiently. We build structured teams that operate on your specific processes, allowing your core team to focus on strategic growth.', ARRAY['Reduced operational costs', 'Scalable support teams', 'Process optimization', '24/7 coverage options', 'Quality assurance focus'], ARRAY['Customer Support', 'Data Entry & Management', 'Back-office Operations', 'Virtual Assistance'], true),
('Technology & AI Solutions', 'technology-ai', 'Build smarter, more efficient operations with modern software, automation, AI, and technology solutions.', 'We design, build, and integrate custom software and AI-driven solutions that solve complex business challenges. From automating repetitive tasks to building enterprise-grade applications, our technology team delivers results.', ARRAY['Custom software development', 'AI and automation integration', 'System modernization', 'Improved efficiency', 'Data-driven insights'], ARRAY['Custom Web Applications', 'AI Chatbots', 'Workflow Automation', 'API Integrations'], true);

-- Insert Demo Industries
INSERT INTO public.industries (name, slug, description, challenges, solutions, published) VALUES
('Technology', 'technology', 'Supporting high-growth tech companies with engineering talent and operational scale.', ARRAY['Rapid scaling needs', 'High talent competition', 'Complex technical requirements'], ARRAY['Dedicated engineering teams', 'QA automation', 'Technical support'], true),
('Healthcare', 'healthcare', 'Providing secure, reliable support and technology solutions for healthcare organizations.', ARRAY['Data security compliance', 'Patient support volume', 'Legacy system integration'], ARRAY['HIPAA-compliant BPO', 'Custom patient portals', 'Health data management'], true),
('Finance', 'finance', 'Enabling financial institutions to modernize operations and enhance customer experience.', ARRAY['Regulatory compliance', 'Legacy software', 'High-volume processing'], ARRAY['Fintech development', 'Data processing teams', 'Secure automation'], true),
('E-commerce', 'e-commerce', 'Helping retail and e-commerce brands scale customer support and operational logistics.', ARRAY['Seasonal volume spikes', 'Customer support management', 'Platform integrations'], ARRAY['24/7 customer service', 'Inventory management support', 'E-commerce development'], true);

-- Insert Demo Testimonials
INSERT INTO public.testimonials (name, position, company, content, featured, published) VALUES
('Sarah Jenkins', 'CTO', 'TechFlow Innovations', 'Scale Limited provided us with an exceptional engineering team that integrated seamlessly with our in-house developers. They delivered high-quality code and helped us launch two months ahead of schedule. DEMO CONTENT', true, true),
('Michael Chen', 'Operations Director', 'Global Retail Group', 'Outsourcing our customer support to Scale Limited was one of the best operational decisions we''ve made. The transition was smooth, and our customer satisfaction scores have never been higher. DEMO CONTENT', true, true),
('David Rodriguez', 'CEO', 'FinServe Solutions', 'The custom AI solution built by Scale Limited automated our manual data processing tasks, saving our team countless hours every week. Their technical expertise is truly impressive. DEMO CONTENT', false, true);

-- Insert Demo Portfolio Projects
INSERT INTO public.portfolio_projects (title, slug, industry, service, summary, challenge, solution, results, technologies, featured, published) VALUES
('Enterprise E-commerce Migration', 'enterprise-ecommerce-migration', 'E-commerce', 'Technology & AI Solutions', 'Migrated a legacy retail platform to a modern, scalable architecture handling 10k+ daily orders. DEMO CONTENT', 'The client''s legacy monolithic system was crashing during peak sales events and lacked the flexibility to support new business models. DEMO CONTENT', 'We re-architected the platform using a modern microservices approach with Next.js and robust cloud infrastructure, allowing for rapid deployment and seamless scaling. DEMO CONTENT', 'Achieved 99.99% uptime during the holiday season and increased conversion rates by 15% due to faster page load times. DEMO CONTENT', ARRAY['Next.js', 'Node.js', 'PostgreSQL', 'AWS'], true, true),
('Scaling QA Operations for a Fintech Startup', 'scaling-qa-fintech', 'Finance', 'Staff Augmentation', 'Provided a dedicated team of 5 Senior QA Automation Engineers to accelerate product releases. DEMO CONTENT', 'The client was struggling to keep up with automated testing as their product features grew, leading to delayed releases and production bugs. DEMO CONTENT', 'Scale Limited quickly deployed a team of experienced QA engineers who built a robust automated testing framework from scratch. DEMO CONTENT', 'Reduced bug escape rate by 40% and decreased average release cycle time from 3 weeks to 1 week. DEMO CONTENT', ARRAY['Cypress', 'Playwright', 'GitHub Actions'], true, true),
('24/7 Customer Support Team Setup', '24-7-customer-support', 'Technology', 'Business Process Outsourcing', 'Built and managed a dedicated support team providing round-the-clock assistance for a global SaaS company. DEMO CONTENT', 'As the client expanded globally, their internal team couldn''t manage the volume of support tickets outside of standard business hours. DEMO CONTENT', 'We established a scalable BPO team across multiple time zones, trained on the client''s complex technical product. DEMO CONTENT', 'Maintained an average first-response time of under 15 minutes and achieved a 95% CSAT score. DEMO CONTENT', ARRAY['Zendesk', 'Intercom', 'Jira'], false, true);

-- Insert Site Settings
INSERT INTO public.site_settings (key, value) VALUES
('contact_email', 'hello@scalelimited.demo'),
('contact_phone', '+1 (555) 123-4567'),
('address_canada', 'Toronto, ON, Canada'),
('address_usa', 'New York, NY, USA'),
('address_australia', 'Sydney, NSW, Australia'),
('linkedin_url', 'https://linkedin.com/company/scale-limited'),
('twitter_url', 'https://twitter.com/scalelimited');
