'use client';

import React from 'react';
import Image from 'next/image';
import AppStoreButtons from './AppStoreButtons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      //{ name: "How It Works", href: "#how-it-works" },
      { name: "Pricing", href: "#pricing" },
      { name: "Community", href: "#community" },
      { name: "Security", href: "#security" }
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      //{ name: "Bug Reports", href: "#" },
      { name: "Feature Requests", href: "#contact" },
      //{ name: "System Status", href: "#" }
    ],
    //company: [
      //{ name: "About Us", href: "#" },
      //{ name: "Blog", href: "#" },
       //{ name: "Careers", href: "#" },
      //{ name: "Press Kit", href: "#" },
      //{ name: "Partners", href: "#" }
    //],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "#" },
      //{ name: "Cookie Policy", href: "#" },
      //{ name: "GDPR", href: "#" },
      //{ name: "Refund Policy", href: "#" }
    ]
  };

  const socialLinks = [

    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.928-.875 2.026-1.297 3.323-1.297s2.395.422 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.928.796-2.026 1.297-3.323 1.297zm7.83-9.405c-.49 0-.928-.175-1.297-.525-.369-.35-.554-.788-.554-1.297 0-.509.185-.947.554-1.297.369-.35.807-.525 1.297-.525.49 0 .928.175 1.297.525.369.35.554.788.554 1.297 0 .509-.185.947-.554 1.297-.369.35-.807.525-1.297.525z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      href: "#",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
            Ready to Begin your journey?
          </h2>
          <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join hundreds of believers who are deepening their relationship with God through My Prophetic Journal
          </p>
          

          {/* App Store Badges */}
          <AppStoreButtons />
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2 sm:col-span-2">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 mr-3">
                  <Image
                    src="/mainLogo.png"
                    alt="My Prophetic Journal"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                </div>
                <span className="text-lg sm:text-xl font-bold">My Prophetic Journal</span>
              </div>
              
              <p className="text-background/70 mb-6 max-w-md">
                Empowering believers to capture, understand, and grow in their journey by honoring the Word of the Lord.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-background/60 hover:text-background transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-background/70 hover:text-background transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-background/70 hover:text-background transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-background/70 hover:text-background transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/60 text-sm mb-4 md:mb-0">
              © {currentYear} My Prophetic Journal. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/>
                </svg>
                <span className="text-background/70">All Systems Operational</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
