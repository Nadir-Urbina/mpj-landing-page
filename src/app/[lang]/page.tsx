import type { Metadata } from 'next';

import Header from '@/app/components/Header';
import HeroSection from '@/app/components/HeroSection';
import ProblemSection from '@/app/components/ProblemSection';
import FeaturesSection from '@/app/components/FeaturesSection';
import ReviewsSection from '@/app/components/ReviewsSection';
import PricingSection from '@/app/components/PricingSection';
import BlogSection from '@/app/components/BlogSection';
import ContactSection from '@/app/components/ContactSection';
import FinalCtaSection from '@/app/components/FinalCtaSection';
import Footer from '@/app/components/Footer';
import ScrollReveal from '@/app/components/ScrollReveal';
import { pageAlternates, type Locale } from '@/i18n/config';

type Props = { params: Promise<{ lang: Locale }> };

// Self-referencing canonical: without it, campaign URLs carrying ?utm_* params
// can be indexed as separate copies of the homepage.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return { alternates: pageAlternates(lang, '/') };
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  return (
    <div className="mpj">
      <Header locale={lang} />
      <HeroSection locale={lang} />
      <ProblemSection locale={lang} />
      <FeaturesSection locale={lang} />
      <ReviewsSection locale={lang} />
      <PricingSection locale={lang} />
      <BlogSection locale={lang} />
      <ContactSection locale={lang} />
      <FinalCtaSection locale={lang} />
      <Footer locale={lang} />
      <ScrollReveal />
    </div>
  );
}
