'use client';

import { notFound } from 'next/navigation';
import { Navbar } from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { Check } from 'lucide-react';
import Link from 'next/link';

// This will be replaced with actual database query
const getWorkflowBySlug = async (slug: string) => {
  const mockWorkflows: Record<string, any> = {
    'ecommerce-lead-capture': {
      id: '1',
      title: 'E-commerce Lead Capture Bot',
      slug: 'ecommerce-lead-capture',
      description: 'Automatically capture and nurture leads from your e-commerce store. Our intelligent bot engages visitors, captures contact information, and integrates seamlessly with your existing CRM and email marketing tools.',
      features: [
        'Automatic lead capture from product pages',
        'Shopify, WooCommerce, and custom platform integration',
        'Automated welcome email sequences',
        'Lead scoring and qualification',
        'CRM synchronization (Salesforce, HubSpot, Pipedrive)',
        'Real-time analytics dashboard',
        'A/B testing for conversion optimization',
        'Mobile-responsive chat widget',
      ],
      category: 'E-commerce',
      monthlyPrice: '299',
      techStack: ['Node.js', 'React', 'PostgreSQL', 'Redis', 'Webhook APIs'],
      whoItsFor: [
        'E-commerce store owners looking to increase conversions',
        'Marketing teams wanting to automate lead nurturing',
        'Agencies managing multiple client stores',
        'SaaS companies with product-led growth strategies',
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  };

  return mockWorkflows[slug as string] || null;
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const workflow = await getWorkflowBySlug(slug);

  if (!workflow) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-5xl mx-auto container-padding py-20">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            {workflow.category}
          </div>
          <h1 className="text-5xl font-bold text-text mb-6">{workflow.title}</h1>
          <p className="text-xl text-text-muted leading-relaxed">
            {workflow.description}
          </p>
        </div>

        {/* Price and CTA */}
        <div className="bg-surface border border-border rounded-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-sm text-text-muted mb-1">Monthly Subscription</div>
              <div className="text-5xl font-bold text-text">
                ${workflow.monthlyPrice}
                <span className="text-2xl text-text-muted">/mo</span>
              </div>
            </div>
            <Link
              href="#subscribe"
              className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-md hover:bg-primary/90 transition-colors"
            >
              Subscribe Now
            </Link>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text mb-6">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workflow.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-start space-x-3">
                <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-text-muted">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Who It's For */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text mb-6">Who It's For</h2>
          <div className="space-y-3">
            {workflow.whoItsFor.map((item: string, index: number) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                <span className="text-text-muted text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text mb-6">Technical Stack</h2>
          <div className="flex flex-wrap gap-3">
            {workflow.techStack.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-4 py-2 bg-surface border border-border rounded-md text-text font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/10 border border-primary rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-text mb-4">
            Ready to Automate Your Workflow?
          </h3>
          <p className="text-text-muted mb-6 max-w-2xl mx-auto">
            Start your subscription today and get immediate access to this automation workflow.
            Cancel anytime.
          </p>
          <Link
            href="#subscribe"
            className="inline-block px-10 py-4 bg-primary text-white text-lg font-semibold rounded-md hover:bg-primary/90 transition-colors"
          >
            Subscribe for ${workflow.monthlyPrice}/month
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
