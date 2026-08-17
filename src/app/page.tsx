import type { Metadata } from 'next';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeaturesSection';
import ReviewsSection from './components/ReviewsSection';
import PricingSection from './components/PricingSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

// Self-referencing canonical: without it, campaign URLs carrying ?utm_* params
// can be indexed as separate copies of the homepage.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <div className="mpj">
      <Header />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <ReviewsSection />
      <PricingSection />
      <BlogSection />
      <ContactSection />
      <FinalCtaSection />
      <Footer />
      <ScrollReveal />
    </div>
  );
}
