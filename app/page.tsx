'use client';

import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import PortfolioPreview from '@/components/PortfolioPreview';
import CompanyIntro from '@/components/CompanyIntro';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <CompanyIntro />
      <ServicesOverview />
      <TestimonialsCarousel />
      <PortfolioPreview />
    </div>
  );
}