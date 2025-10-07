'use client';

import React from 'react';
import Image from 'next/image';
import AppStoreButtons from './AppStoreButtons';

const CommunitySection = () => {
  const teamFeatures = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16,4C18.11,4 20.11,4.89 21.61,6.39C23.11,7.89 24,9.89 24,12A8,8 0 0,1 16,20H5A5,5 0 0,1 0,15A5,5 0 0,1 5,10C6.04,7.69 8.34,6 11,6C12.09,6 13.09,6.26 14,6.74C14.62,5.10 15.96,4 16,4Z"/>
        </svg>
      ),
      title: "Secure Sharing",
      description: "Share prophetic words and insights with your team in a secure, private environment designed for spiritual growth."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A2,2 0 0,1 14,4C14,5.5 13.5,6.76 12.65,7.76L17,12L13.5,15.5L12.65,14.65C11.65,15.5 10.5,16 9,16A7,7 0 0,1 2,9A7,7 0 0,1 9,2C10.5,2 11.65,2.5 12.65,3.35L14,2L17,5L15.5,6.5L14.65,7.35C15.5,8.35 16,9.5 16,11H14A5,5 0 0,0 9,6A5,5 0 0,0 4,11A5,5 0 0,0 9,16C10,16 10.88,15.64 11.54,15.05L13,16.5L16.5,13L21,17.5L19.5,19L15.05,14.54C14.64,15.88 13.5,16 12,16H9A7,7 0 0,1 2,9Z"/>
        </svg>
      ),
      title: "Group Insights",
      description: "Discover patterns and themes across your team's journey with collective analytics and shared revelations."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
        </svg>
      ),
      title: "Encouragement & Accountability",
      description: "Build each other up with comments, prayers, and accountability."
    }
  ];


  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-muted/30 via-accent/5 to-background relative overflow-hidden" id="community">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Grow Together in <span className="text-primary">Community</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto px-4">
            Connect with other believers, create prophetic teams, and encourage one another in your journey
          </p>
        </div>

        {/* Team Features */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 sm:mb-6 leading-tight">
              Create or Join a <span className="text-primary">Prophetic Team</span>
            </h3>
            <p className="text-base sm:text-lg text-foreground/70 mb-6 sm:mb-8 leading-relaxed">
              Whether you&apos;re leading a ministry team, part of a prayer group, or growing with friends,
              our team features help you journey together in faith.
            </p>

            <div className="space-y-5 sm:space-y-6">
              {teamFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-muted/30 p-4 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="bg-primary/20 p-3 rounded-xl flex-shrink-0 shadow-md">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Team Screenshot - Show on mobile too */}
          <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px]">
            <div className="relative">
              {/* Phone mockup shadow/border */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-[2.5rem] blur-xl scale-105"></div>
              <div className="relative bg-foreground/5 p-2 rounded-[2.5rem] shadow-2xl">
                <Image
                  src="/teamPageMPJ0904.png"
                  alt="Team Collaboration Interface"
                  width={300}
                  height={600}
                  className="rounded-[2rem] w-full h-auto"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-secondary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Biblical Foundation */}
        <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-3xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 shadow-xl border border-secondary/20">
          <div className="text-center mb-8 sm:mb-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16,4C18.11,4 20.11,4.89 21.61,6.39C23.11,7.89 24,9.89 24,12A8,8 0 0,1 16,20H5A5,5 0 0,1 0,15A5,5 0 0,1 5,10C6.04,7.69 8.34,6 11,6C12.09,6 13.09,6.26 14,6.74C14.62,5.10 15.96,4 16,4Z"/>
              </svg>
            </div>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-5 italic leading-relaxed px-4">
              &quot;Two are better than one, because they have a good return for their labor.&quot;
            </blockquote>

            <cite className="text-base sm:text-lg text-secondary font-semibold">Ecclesiastes 4:9</cite>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-muted/30 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg sm:text-xl font-bold mb-3">Accountability</h4>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                &quot;As iron sharpens iron, so one person sharpens another&quot; - Proverbs 27:17
              </p>
            </div>
            <div className="bg-muted/30 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg sm:text-xl font-bold mb-3">Encouragement</h4>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                &quot;Therefore encourage one another and build each other up&quot; - 1 Thessalonians 5:11
              </p>
            </div>
          </div>
        </div>


        {/* CTA */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 px-4">Ready to start your journey in Community?</h3>
          <p className="text-sm sm:text-base lg:text-lg text-foreground/70 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
            Start your journey with others who share your passion for hearing God&apos;s voice
          </p>
            {/* App Store Badges */}
            <AppStoreButtons />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
