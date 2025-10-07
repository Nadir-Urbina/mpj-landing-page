'use client';

import React, { useState } from 'react';
import { useAppStoreLink, useIsDesktop } from '../hooks/usePlatform';
import DownloadModal from './DownloadModal';

const PremiumSection = () => {
  const appStoreLink = useAppStoreLink();
  const isDesktop = useIsDesktop();
  const [showModal, setShowModal] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDesktop) {
      e.preventDefault();
      setShowModal(true);
    }
  };
  const freFeatures = [
    "Voice recording (up to 3 minutes)",
    "Unlimited text-based entries",
    "Manual Scripture search",
    "Join Teams",
    "Share your notes with other App Users",
    "Cloud backup & sync",
    "Custom categories & tags"
  ];

  const premiumFeatures = [
    "Unlimited voice transcription",
    "AI-powered insights & patterns recognition",
    "Advanced Biblical References integration",
    "Team collaboration features (Create and Join Teams)"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden" id="pricing">
      {/* Decorative blobs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Our <span className="text-primary">Simple</span> Pricing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto px-4">
            Start free and unlock powerful AI features to deepen your relationship with God
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16">
          {/* Free Plan */}
          <div className="bg-muted/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 border border-border shadow-xl hover:shadow-2xl transition-all duration-300 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">Free</h3>
              <div className="text-5xl sm:text-6xl font-bold text-foreground mb-3">$0</div>
              <p className="text-base text-foreground/60">Perfect for getting started</p>
            </div>

            <ul className="space-y-4 mb-8 min-h-[280px]">
              {freFeatures.map((feature, index) => (
                <li key={index} className="flex items-start text-sm sm:text-base text-foreground/80">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-secondary mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownloadClick}
              className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white py-4 rounded-xl font-semibold transition-all duration-300 text-center block text-base sm:text-lg shadow-md hover:shadow-xl hover:scale-105"
            >
              Get Started Free
            </a>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-b from-primary/15 to-secondary/15 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-primary shadow-2xl hover:shadow-3xl transition-all duration-300 relative transform hover:scale-105">
            {/* Popular Badge */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Most Popular
              </div>
            </div>

            <div className="text-center mb-8 mt-2">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">Premium</h3>
              <div className="flex items-baseline justify-center mb-3">
                <span className="text-5xl sm:text-6xl font-bold text-primary">$7.99</span>
                <span className="text-base text-foreground/60 ml-2">/month</span>
              </div>
              <div className="text-sm sm:text-base text-foreground/60 mb-2">or $69.99/year (save 26%)</div>
              <p className="text-base text-foreground/60">For serious spiritual growth</p>
            </div>

            <ul className="space-y-4 mb-8 min-h-[280px]">
              <li className="flex items-start text-sm sm:text-base text-foreground/60 mb-3 font-semibold">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-secondary mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                </svg>
                Everything in Free, plus:
              </li>
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-start text-sm sm:text-base text-foreground/80">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownloadClick}
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-4 rounded-xl font-bold transition-all duration-300 text-center block text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Start Free Trial
            </a>
            
            <p className="text-center text-xs text-foreground/60 mt-3">
              14-day free trial • Cancel anytime
            </p>
          </div>
        </div>

        {/* Premium Features Highlight */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-primary/20">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-12">
            Why Go <span className="text-primary">Premium</span>?
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center bg-muted/30 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3">Unlimited Transcription</h4>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">Whether it&apos;s listening or reading, we&apos;ve got your back, plus transcriptions are also used in the pattern analysis feature.</p>
            </div>

            <div className="text-center bg-muted/30 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3">AI-Powered Insights</h4>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">Discover patterns and themes in your journey that you might have missed.</p>
            </div>

            <div className="text-center bg-muted/30 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 sm:col-span-2 md:col-span-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16,4C18.11,4 20.11,4.89 21.61,6.39C23.11,7.89 24,9.89 24,12A8,8 0 0,1 16,20H5A5,5 0 0,1 0,15A5,5 0 0,1 5,10C6.04,7.69 8.34,6 11,6C12.09,6 13.09,6.26 14,6.74C14.62,5.10 15.96,4 16,4Z"/>
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3">Team Collaboration</h4>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">Connect with your prophetic team and grow together in accountability and encouragement.</p>
            </div>
          </div>
        </div>




      </div>

      {/* Download Modal */}
      <DownloadModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default PremiumSection;

