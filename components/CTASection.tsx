'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cream/5 rounded-[100%] blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto container-padding text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-cream mb-8 tracking-tight">
          Let AI Work 24/7 For You
        </h2>
        <p className="text-xl text-cream/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Stop wasting time on repetitive tasks. Start automating your business today
          and focus on what really matters.
        </p>
        <Link
          href="#contact"
          className="inline-block px-12 py-5 bg-cream text-zinc-950 text-lg font-bold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cream/10"
        >
          Book Your Free Consultation
        </Link>
      </div>
    </section>
  );
}
