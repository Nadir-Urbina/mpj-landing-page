import React from 'react';
import Link from 'next/link';

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
        </svg>
      ),
      title: "Secure by Design",
      description: "your data is protected with enterprise-grade security. Your entries are securely stored and remain private unless you decide to share with other app users."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z"/>
        </svg>
      ),
      title: "Secure Cloud Backup",
      description: "Your data is safely backed up to secure cloud servers with multiple redundancies, ensuring you never lose your spiritual insights."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
        </svg>
      ),
      title: "Privacy-First Approach",
      description: "We never sell your data or use it for advertising. your journey is yours alone, and we're committed to keeping it that way."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9,12L11,14L15,10L13.59,8.59L11,11.17L9.41,9.59L8,11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>
        </svg>
      ),
      title: "Privacy-Focused Design",
      description: "Your data remains private and secure, and you have full control over who can see your data."
    }
  ];


  return (
    <section className="py-20 bg-muted/20" id="security">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your Journey is <span className="text-primary">Secure</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            We understand the sacred nature of your spiritual insights. That&apos;s why we&apos;ve built My Prophetic Journal with a privacy first approach.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <div className="text-primary">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>


        {/* Security Promise */}
        <div className="bg-background rounded-3xl p-8 lg:p-12 shadow-sm border border-border max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Our Security Promise</h3>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              We pledge to protect your journey with the same reverence and care that you put into it. 
              Your trust is sacred to us, and we&apos;ll never compromise on your privacy or security.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                </svg>
                <span>Zero Data Selling</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                </svg>
                <span>No Advertising</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                </svg>
                <span>Full Data Control</span>
              </div>
            </div>
          </div>
        </div>

        {/* Data Control */}
        <div className="mt-16 text-center">

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/privacy"
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Privacy Policy
            </Link>
            <button className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              You Own Your Data
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;

