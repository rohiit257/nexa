'use client';

import Link from 'next/link';
import ColorBends from './ColorBends';
import Aurora from './Aurora';

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLDivElement | null>;
}

export default function HeroSection({ heroRef }: HeroSectionProps) {
  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
  colorStops={["#f486c0","#ffffff","#ff94c8"]}
  blend={0.5}
  amplitude={1.0}
  speed={1}
/>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto container-padding text-center flex flex-col items-center justify-center h-full">
        {/* Tagline */}
        <div className="space-y-6 mb-12 animate-slide-up backdrop-blur-sm  p-8 rounded-3xl">
          <h2 className="text-5xl md:text-7xl font-bold bg-white from-primary via-pink-300 to-white bg-clip-text text-transparent leading-tight tracking-tight">
            AI Automations, Web Services & More
          </h2>
          
          <p className="text-lg md:text-xl text-[#F5F5DC] max-w-2xl mx-auto leading-relaxed">
            From intelligent automation workflows to custom web solutions, we build the digital systems that power modern businesses. Scale effortlessly with AI-driven technology.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black text-lg font-medium rounded-full"
          >
            Book Strategy Call
          </Link>
          
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 px-10 py-4 bg-zinc-800 text-white text-lg font-medium rounded-full border border-zinc-700"
          >
            Explore Workflows
          </Link>
        </div>
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
