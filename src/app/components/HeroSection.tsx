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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 px-2 sm:px-0">
              <span className="block sm:inline">Capture, Track, and{' '}</span>
              <span className="text-primary block sm:inline">Share</span>{' '}
              <span className="block sm:inline">God&apos;s Voice in Your Life</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
              The journaling app that helps you recognize patterns, connect with Scripture, 
              and discern the Word of the Lord in community.
            </p>

            {/* App Store Badges */}
            <AppStoreButtons className="lg:justify-start mb-8" />


            {/* Social Proof Numbers */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mt-8 sm:mt-12 text-sm text-foreground/60">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Growing</div>
                <div>Global Community</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5★</div>
                <div>App Store Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - App Demo Video */}
          <div className="relative order-1 lg:order-2">
            <div className="relative mx-auto max-w-xs sm:max-w-sm scale-75 sm:scale-80 lg:scale-80">
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
