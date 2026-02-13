'use client';

import { Zap, Bot, Mic, Globe, Users } from 'lucide-react';
import Link from 'next/link';
import { RefObject } from 'react';

interface ServicesSectionProps {
  servicesRef: RefObject<HTMLElement | null>;
  horizontalRef: RefObject<HTMLDivElement | null>;
  services: any[];
}

export default function ServicesSection({ servicesRef, horizontalRef }: ServicesSectionProps) {
  const services = [
    {
      title: 'AI Automation Workflows',
      icon: Zap,
      description:
        'Transform your business operations with intelligent automation that never sleeps. Eliminate manual tasks, reduce errors by 95%, and free your team to focus on what truly matters—growing your business.',
    },
    {
      title: 'Agentic AI Systems',
      icon: Bot,
      description:
        'Deploy autonomous AI agents that think, decide, and execute like your best employees. Scale operations without scaling headcount. Handle complex workflows with precision while you focus on strategy.',
    },
    {
      title: 'Voice & Chat AI',
      icon: Mic,
      description:
        'Deliver instant, intelligent customer experiences 24/7. Reduce response times from hours to seconds. Turn every interaction into an opportunity with AI that understands context and converts conversations into revenue.',
    },
    {
      title: 'Custom Web Solutions',
      icon: Globe,
      description:
        'Launch stunning, high-performance web experiences that captivate and convert. Built with cutting-edge technology for speed, security, and scalability. Your digital presence, reimagined.',
    },
    {
      title: 'CRM & Lead Automation',
      icon: Users,
      description:
        'Never lose a lead again. Intelligent automation captures, nurtures, and converts prospects while you sleep. Close more deals faster with a CRM that works as hard as you do—powered by AI.',
    },
  ];

  return (
    <section
      ref={servicesRef}
      id="services"
      className="relative h-screen flex items-center overflow-hidden bg-pink-100"
    >
      <div
        ref={horizontalRef}
        className="flex container-padding relative"
        style={{ width: `${(services.length + 1) * 100}vw` }}
      >
        {/* Trailing Design Element - Connected Path */}
        <svg 
          className="absolute top-1/2 left-0 w-full h-96 -translate-y-1/2 pointer-events-none z-0 opacity-20"
          preserveAspectRatio="none"
          viewBox={`0 0 ${(services.length + 1) * 100} 100`}
        >
          <path
            d={`M0,50 ${Array.from({ length: services.length + 1 }).map((_, i) => 
              `C${i * 100 + 50},${50 + (i % 2 === 0 ? 30 : -30)} ${i * 100 + 50},${50 + (i % 2 === 0 ? -30 : 30)} ${(i + 1) * 100},50`
            ).join(' ')}`}
            fill="none"
            stroke="#EC4899"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Intro Slide */}
        <div className="service-panel flex-shrink-0 w-screen h-screen flex items-center justify-center bg-pink-100 relative z-10">
          <div className="max-w-6xl mx-auto px-8 w-full">
            <h2 className="text-6xl md:text-8xl font-bold mb-16 text-zinc-800 text-center leading-tight">
              Services We Offer
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center group cursor-default">
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <span className="text-xl md:text-2xl font-bold text-zinc-700 group-hover:text-primary transition-colors">
                      {service.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {services.map((service, index) => {
          const Icon = service.icon;
          const isLastSlide = index === services.length - 1;
          return (
            <div
              key={index}
              className={`service-panel flex-shrink-0 w-screen h-screen flex items-center justify-center relative z-10 ${
                isLastSlide ? 'bg-black' : 'bg-pink-100'
              }`}
            >
              <div className="max-w-4xl mx-auto text-center px-8">
                {/* Title */}
                <h2 className={`text-5xl md:text-7xl font-bold mb-8 leading-tight ${
                  isLastSlide ? 'text-white' : 'text-zinc-800'
                }`}>
                  {service.title}
                </h2>

                {/* Description */}
                <p className={`text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto ${
                  isLastSlide ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  {service.description}
                </p>

                {/* CTA Button */}
                <Link
                  href="/shop"
                  className={`inline-flex items-center gap-3 px-10 py-5 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 text-lg ${
                    isLastSlide 
                      ? 'bg-white from-primary to-secondary text-black hover:shadow-2xl hover:shadow-primary/50' 
                      : 'bg-zinc-900 text-white hover:shadow-2xl hover:shadow-zinc-900/50'
                  }`}
                >
                  Explore {service.title}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
