import React from 'react';
import Image from 'next/image';

const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      title: "Record Your Heart",
      description: "Capture thoughts, prayers, visions, and dreams through voice recording, text, or photos. No prophetic word is too small or too big.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
        </svg>
      ),
      color: "from-primary to-tertiary",
      features: ["Voice recordings", "Text entries", "Photo attachments", "Dream journal"]
    },
    {
      step: "02", 
      title: "Connect Scripture",
      description: "Our AI analyzes your entries and suggests relevant Bible verses, helping you understand God's heart and connect His word to your experience.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21,5V7H3V5H21M21,11V13H3V11H21M21,17V19H3V17H21Z"/>
        </svg>
      ),
      color: "from-secondary to-primary",
      features: ["Automatic verse suggestions", "Cross-references", "Thematic connections", "Study notes"]
    },
    {
      step: "03",
      title: "Discover Patterns",
      description: "Watch as God's patterns emerge in your life. Our AI helps you recognize themes, growth areas, and how the Lord is working in your journey.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
        </svg>
      ),
      color: "from-accent to-secondary",
      features: ["Pattern recognition", "Growth insights", "Timeline analysis", "Spiritual milestones"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="how-it-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Simple steps to transform your journey and deepen your relationship with God
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                {/* Step Number Circle */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-background rounded-full p-2 shadow-md border border-border">
                    <div className="text-primary">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center text-sm text-foreground/80">
                        <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pattern Discovery Showcase */}
        <div className="mt-20 mb-16">
          <div className="bg-gradient-to-r from-tertiary/10 to-accent/10 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Discover <span className="text-tertiary">Patterns</span> in Your Journey
                </h3>
                <p className="text-lg text-foreground/80 mb-6">
                  Our AI analyzes your journey to reveal recurring themes, seasonal patterns, 
                  and meaningful connections you might have missed.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-tertiary/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-tertiary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                      </svg>
                    </div>
                    <span className="text-foreground/80">Recurring themes and symbols</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-tertiary/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-tertiary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                      </svg>
                    </div>
                    <span className="text-foreground/80">Spiritual seasons and timing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-tertiary/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-tertiary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                      </svg>
                    </div>
                    <span className="text-foreground/80">Growth milestones and breakthroughs</span>
                  </div>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="relative mx-auto max-w-sm">
                  <Image
                    src="/patternDiscovery0904.png"
                    alt="Pattern Discovery Interface"
                    width={350}
                    height={700}
                    className="rounded-[2rem] shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Biblical Foundation */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="mb-6">
              <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21,5V7H3V5H21M21,11V13H3V11H21M21,17V19H3V17H21Z"/>
              </svg>
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-4 italic">
              &quot;But when he, the Spirit of truth, comes, he will guide you into all the truth.&quot;
            </blockquote>
            
            <cite className="text-lg text-primary font-semibold">John 16:13</cite>
            
            <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
              Built on the biblical foundation that God speaks to His people, My Prophetic Journal helps you 
              recognize and respond to the Holy Spirit&apos;s guidance in your life.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors mr-4">
            Start Your Journey Today
          </button>
          <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
