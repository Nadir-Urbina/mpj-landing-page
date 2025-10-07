import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SocialProofSection from './components/SocialProofSection';
import FeaturesSection from './components/FeaturesSection';
import PremiumSection from './components/PremiumSection';
import CommunitySection from './components/CommunitySection';
import SecuritySection from './components/SecuritySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <PremiumSection />
      <CommunitySection />
      <SecuritySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
