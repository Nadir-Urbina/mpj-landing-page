import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3,13H11V3H3M3,21H11V15H3M13,21H21V11H13M13,3V9H21V3"/>
        </svg>
      ),
      title: "Beautiful Dashboard",
      description: "Get a complete overview of your journey with daily insights, progress tracking, and quick access to all features.",
      color: "bg-primary",
      features: ["Daily Biblical Encouragement", "Progress visualization", "Quick entry access", "Journey timeline"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
        </svg>
      ),
      title: "Voice Recording & Transcription",
      description: "Capture your dreams, visions, prophetic words and more in voice format, then transcribe it to text all within the same place.",
      color: "bg-accent",
      features: ["High-quality audio capture", "Voice-to-Text Transcription", "Playback controls"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21,5V7H3V5H21M21,11V13H3V11H21M21,17V19H3V17H21Z"/>
        </svg>
      ),
      title: "Biblical References Integration",
      description: "Find references in the Scriptures that relate to your dream, prophetic word, vision, and discern it through the lens of the most reliable prophetic message, the Bible.",
      color: "bg-secondary",
      features: ["Automatic verse suggestions", "Scripture connections", "Biblical search", "Cross-references"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
        </svg>
      ),
      title: "Pattern Recognition & Analysis",
      description: "Discover meaningful patterns in your journey, key words, themes, that help you better discern the specific message of the Lord for your life.",
      color: "bg-tertiary",
      features: ["Pattern Discovery", "Spiritual insights", "Trend analysis"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16,4C18.11,4 20.11,4.89 21.61,6.39C23.11,7.89 24,9.89 24,12A8,8 0 0,1 16,20H5A5,5 0 0,1 0,15A5,5 0 0,1 5,10C6.04,7.69 8.34,6 11,6C12.09,6 13.09,6.26 14,6.74C14.62,5.10 15.96,4 16,4Z"/>
        </svg>
      ),
      title: "Community & Teams",
      description: "Connect with other believers, create prophetic teams, and encourage one another in your journey.",
      color: "bg-primary",
      features: ["Team collaboration", "Secure sharing", "Group insights", "Community encouragement"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden" id="features">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Everything You Need {' '}
            <span className="text-primary">To Honor your Journey</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto px-4">
            Powerful features designed to help you capture, organize, and understand God&apos;s voice in your life
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          {/* Top Row - 3 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-muted/50 backdrop-blur-sm rounded-2xl p-5 sm:p-7 h-full border border-border hover:border-primary/50 shadow-md hover:shadow-2xl transition-all duration-300">
                  {/* Icon and Title Row */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-foreground/70 mb-5 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-xs sm:text-sm text-foreground/80">
                        <svg className="w-3 h-3 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {features.slice(3, 5).map((feature, index) => (
              <div
                key={index + 3}
                className="group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-muted/50 backdrop-blur-sm rounded-2xl p-5 sm:p-7 h-full border border-border hover:border-primary/50 shadow-md hover:shadow-2xl transition-all duration-300">
                  {/* Icon and Title Row */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-foreground/70 mb-5 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-xs sm:text-sm text-foreground/80">
                        <svg className="w-3 h-3 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Feature Highlight */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-6 sm:p-8 lg:p-12 mb-20 shadow-xl border border-primary/20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 leading-tight">
                Never Lose a Prophetic Word Again
              </h3>
              <p className="text-base sm:text-lg text-foreground/80 mb-5 leading-relaxed">
                A prophetic word, dream or vision, a Biblical revelation can be for encouragement in one season, like fresh water in the wilderness, but it can also become a weapon in the season where our faith is being attacked.
              </p>
              <p className="text-base sm:text-lg text-foreground/80 mb-6 leading-relaxed">
                My Prophetic Journal App is our best intent to help you organize and track what the Lord has spoken to you, and revisit it, see what has been fulfilled, what is yet to be fulfilled so you can pray over it, discern the times, group by tags, and more.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  99% Accuracy
                </div>
                <div className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  Real-time Processing
                </div>
                <div className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  Multi-language Support
                </div>
              </div>
            </div>

            {/* Show on mobile too with better styling */}
            <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px]">
              <div className="relative">
                {/* Phone mockup shadow/border */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-[2.5rem] blur-xl scale-105"></div>
                <div className="relative bg-foreground/5 p-2 rounded-[2.5rem] shadow-2xl">
                  <Image
                    src="/listView0913.png"
                    alt="App in action"
                    width={300}
                    height={600}
                    className="rounded-[2rem] w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pattern Recognition Highlight */}
        <div className="bg-gradient-to-r from-tertiary/10 to-accent/10 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-tertiary/20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Show on mobile too with better styling */}
            <div className="order-2 lg:order-1 relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px]">
              <div className="relative">
                {/* Phone mockup shadow/border */}
                <div className="absolute inset-0 bg-gradient-to-br from-tertiary/30 to-accent/30 rounded-[2.5rem] blur-xl scale-105"></div>
                <div className="relative bg-foreground/5 p-2 rounded-[2.5rem] shadow-2xl">
                  <Image
                    src="/patternDiscovery0904.png"
                    alt="Pattern Discovery Interface"
                    width={300}
                    height={600}
                    className="rounded-[2rem] w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 leading-tight">
                Discover <span className="text-tertiary">Patterns</span> in Your Journey
              </h3>
              <p className="text-base sm:text-lg text-foreground/80 mb-5 leading-relaxed">
                We leverage the data analytics advantages of AI, in a secure and private approach where your data is NOT used to train publicly available AI models, the app analyzes all your notes, or a group of notes respecting any filters you have applied for a more targeted analysis, to find patterns, themes, recurring words, potential seasons, and more.
              </p>
              <p className="text-base sm:text-lg text-foreground/80 mb-6 leading-relaxed">
                Track spiritual seasons, identify growth milestones, and understand the timing of God&apos;s voice in your life. The pattern recognition helps you discern when similar themes emerge and what they might mean for your current season.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-tertiary/20 text-tertiary px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  Recurring Themes
                </div>
                <div className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  Spiritual Seasons
                </div>
                <div className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  Growth Insights
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
