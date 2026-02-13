'use client';

import { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import { Search } from 'lucide-react';

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // This will be replaced with actual database data
  const mockWorkflows = [
    {
      id: '1',
      title: 'E-commerce Lead Capture Bot',
      slug: 'ecommerce-lead-capture',
      description: 'Automatically capture and nurture leads from your e-commerce store. Integrates with Shopify, WooCommerce, and custom platforms.',
      features: ['Shopify Integration', 'Automated Email Follow-ups', 'Lead Scoring', 'CRM Sync'],
      category: 'E-commerce',
      monthlyPrice: '299',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      title: 'Agency Client Onboarding System',
      slug: 'agency-client-onboarding',
      description: 'Streamline your agency onboarding process with automated document collection, contract signing, and welcome sequences.',
      features: ['Document Automation', 'E-signature Integration', 'Client Portal', 'Task Management'],
      category: 'Agency',
      monthlyPrice: '499',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '3',
      title: 'CRM Data Enrichment Workflow',
      slug: 'crm-data-enrichment',
      description: 'Automatically enrich your CRM contacts with social profiles, company data, and engagement history from multiple sources.',
      features: ['Multi-source Enrichment', 'Real-time Updates', 'Custom Fields', 'API Access'],
      category: 'CRM',
      monthlyPrice: '399',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '4',
      title: 'Social Media Scheduler Pro',
      slug: 'social-media-scheduler',
      description: 'Plan, schedule, and post content across all major social platforms with AI-powered optimization and best time suggestions.',
      features: ['Multi-platform Support', 'AI Content Suggestions', 'Analytics Dashboard', 'Team Collaboration'],
      category: 'Marketing',
      monthlyPrice: '199',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const categories = ['All', 'E-commerce', 'Agency', 'CRM', 'Marketing'];

  const filteredWorkflows = mockWorkflows.filter((workflow) => {
    const matchesSearch = workflow.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workflow.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || workflow.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto container-padding py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-text mb-4">
            Automation Workflows
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Subscribe to pre-built automation workflows and start saving time today
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
            <input
              type="text"
              placeholder="Search workflows..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-surface border border-border rounded-md text-text placeholder-text-muted focus:outline-none focus:border-primary"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-surface text-text border border-border hover:border-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredWorkflows.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkflows.map((workflow) => (
              <ProductCard key={workflow.id} workflow={workflow} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-text-muted">No workflows found matching your criteria</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
