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
