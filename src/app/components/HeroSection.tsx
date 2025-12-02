'use client';

import React from 'react';
import Image from 'next/image';
import AppStoreButtons from './AppStoreButtons';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-40 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 px-2 sm:px-0">
              <span className="text-primary">Your Prophetic Journal</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 sm:mb-6 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
              Track God&apos;s voice, recognize patterns, and connect with Scripture in community.
            </p>

            {/* Social Proof Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 text-sm">
              <div className="flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
                Join 300+ Believers
              </div>
            </div>

            {/* App Store Badges */}
            <AppStoreButtons className="lg:justify-start mb-6" />


            {/* Social Proof Numbers */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mt-6 sm:mt-8 text-sm text-foreground/60">
              <div className="text-center lg:text-left">
                <div className="text-xl font-bold text-primary">5★ Rating</div>
                <div className="text-xs">On App Stores</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl font-bold text-primary">Free Download</div>
                <div className="text-xs">Start Journaling Today</div>
              </div>
            </div>
          </div>

          {/* Right Content - App Demo Video */}
          <div className="relative order-1 lg:order-2">
            <div className="relative mx-auto max-w-[280px] sm:max-w-sm scale-90 sm:scale-80 lg:scale-80">
              {/* App Demo Video */}
              <div className="relative">
                <video
                  className="rounded-[2.5rem] shadow-2xl w-full h-auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/dashboardMPJ0904.png"
                >
                  <source src="/noteCreation.webm" type="video/webm" />
                  {/* Fallback image for browsers that don't support video */}
                  <Image
                    src="/dashboardMPJ0904.png"
                    alt="My Prophetic Journal App Demo"
                    width={400}
                    height={800}
                    className="rounded-[2.5rem] shadow-2xl"
                  />
                </video>
                
                {/* Play indicator overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-black/20 rounded-full p-4 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8,5.14V19.14L19,12.14L8,5.14Z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-tertiary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
