'use client';

import Link from 'next/link';
import { Workflow } from '../types';

export interface ProductCardProps {
  workflow: Workflow;
}

export default function ProductCard({ workflow }: ProductCardProps) {
  return (
    <Link href={`/shop/${workflow.slug}`}>
      <div className="group bg-surface border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 h-full flex flex-col">
        {/* Category Tag */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
            {workflow.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
          {workflow.title}
        </h3>

        {/* Description */}
        <p className="text-text-muted mb-6 flex-grow line-clamp-3">
          {workflow.description}
        </p>

        {/* Price and CTA */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <div className="text-3xl font-bold text-text">
              ${workflow.monthlyPrice}
            </div>
            <div className="text-sm text-text-muted">per month</div>
          </div>
          <div className="px-6 py-2 bg-primary text-white font-semibold rounded-md group-hover:bg-primary/90 transition-colors">
            Subscribe
          </div>
        </div>
      </div>
    </Link>
  );
}
