'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import PricingSection from '../components/PricingSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animations
    gsap.from('.hero-title', {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
    });

    gsap.from('.hero-subtitle', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
    });

    gsap.from('.hero-buttons', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.6,
    });

    // Horizontal scroll for services
    const servicePanels = gsap.utils.toArray<HTMLElement>('.service-panel');

    if (horizontalRef.current && servicePanels.length > 0) {
      const getMaxWidth = () =>
        servicePanels.reduce((val, section) => val + section.offsetWidth, 0);
      let maxWidth = getMaxWidth();
      const scrollSpeed = 2;

      const horizontalTl = gsap.timeline();
      horizontalTl.to(servicePanels, {
        x: () => window.innerWidth - maxWidth,
        duration: 1,
        ease: 'none',
      });

      ScrollTrigger.create({
        animation: horizontalTl,
        trigger: servicesRef.current,
        pin: true,
        scrub: 2,
        snap: {
          snapTo: 1 / (servicePanels.length - 1),
          duration: { min: 0.2, max: 0.8 },
          delay: 0.1,
          ease: 'power1.inOut',
        },
        end: () => '+=' + maxWidth / scrollSpeed,
        invalidateOnRefresh: true,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative bg-background">
      <Navbar />
      <HeroSection heroRef={heroRef} />
      <ServicesSection
        servicesRef={servicesRef}
        horizontalRef={horizontalRef}
        services={[]}
      />
      <HowItWorksSection />
      
      <CTASection />
      <Footer />
    </div>
  );
}
