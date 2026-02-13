'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '$499',
      description: 'Perfect for small businesses getting started with automation',
      features: [
        '1 Custom Workflow',
        'Email & Chat Support',
        'Basic Analytics Dashboard',
        'Monthly Strategy Call',
        'Documentation & Training',
      ],
      highlighted: false,
    },
    {
      name: 'Growth',
      price: '$1,499',
      description: 'Ideal for growing companies scaling their operations',
      features: [
        '5 Custom Workflows',
        'Priority Support 24/7',
        'Advanced Analytics & Reporting',
        'Weekly Strategy Calls',
        'API Integration Support',
        'Custom AI Agent Development',
      ],
      highlighted: true,
    },
    {
      name: 'Pro',
      price: '$3,999',
      description: 'Enterprise-grade solutions for large organizations',
      features: [
        'Unlimited Custom Workflows',
        'Dedicated Account Manager',
        'Real-time Monitoring & Alerts',
        'Daily Check-ins',
        'White-label Solutions',
        'Custom Integrations',
        'SLA Guarantee',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include monthly updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg p-8 ${
                plan.highlighted
                  ? 'bg-background border-2 border-primary'
                  : 'bg-background border border-border'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-text mb-2">{plan.name}</h3>
                <p className="text-text-muted text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-text">{plan.price}</span>
                  <span className="text-text-muted ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-muted text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`block w-full text-center px-6 py-3 rounded-md font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-surface border border-border text-text hover:border-primary'
                }`}
              >
                Subscribe
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
