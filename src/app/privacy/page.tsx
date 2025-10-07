import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy - My Prophetic Journal",
  description: "Learn how My Prophetic Journal protects your spiritual content and personal data. Our privacy policy explains our commitment to treating your prophetic notes with reverence and respect.",
  openGraph: {
    title: "Privacy Policy - My Prophetic Journal",
    description: "Learn how My Prophetic Journal protects your spiritual content and personal data.",
    url: "https://mypropheticjournal.com/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
            Privacy Policy
          </h1>
          
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-lg text-foreground/70 mb-2">
              Privacy Policy for My Prophetic Journal
            </p>
            <p className="text-sm text-foreground/60">
              Last Updated: September 14, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">1. Introduction</h2>
              <p className="text-foreground/80 mb-4">
                Welcome to My Prophetic Journal (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (the &quot;Service&quot;).
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-secondary">2.1 Personal Information You Provide</h3>
              <ul className="list-disc pl-6 mb-4 text-foreground/80 space-y-2">
                <li><strong>Account Information:</strong> Email address, display name, and profile picture</li>
                <li><strong>Spiritual Notes:</strong> Text content, audio recordings, categories, and timestamps of your prophetic notes</li>
                <li><strong>Biblical References:</strong> Verses, personal notes, and spiritual insights you add</li>
                <li><strong>Team Information:</strong> Team names, descriptions, and member interactions</li>
                <li><strong>Communication Data:</strong> Comments, team discussions, and shared content</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-secondary">2.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 mb-4 text-foreground/80 space-y-2">
                <li><strong>Usage Data:</strong> App features used, session duration, and interaction patterns</li>
                <li><strong>Device Information:</strong> Device type, operating system, and app version</li>
                <li><strong>Technical Data:</strong> IP address, crash reports, and performance metrics</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-secondary">2.3 Third-Party Services Data</h3>
              <ul className="list-disc pl-6 mb-4 text-foreground/80 space-y-2">
                <li><strong>Firebase Authentication:</strong> Manages your account securely</li>
                <li><strong>Firebase Firestore:</strong> Stores your notes and team data</li>
                <li><strong>OpenAI API:</strong> Processes your note content for spiritual pattern analysis</li>
                <li><strong>Bible API Services:</strong> Retrieves biblical verse content for references</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">3. How We Use Your Information</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-secondary">3.1 Core App Functionality</h3>
              <ul className="list-disc pl-6 mb-4 text-foreground/80 space-y-2">
                <li>Provide spiritual note-taking and organization features</li>
                <li>Enable team collaboration and note sharing</li>
                <li>Facilitate biblical reference lookups and suggestions</li>
                <li>Generate AI-powered spiritual pattern insights</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-secondary">3.2 Service Improvement</h3>
              <ul className="list-disc pl-6 mb-4 text-foreground/80 space-y-2">
                <li>Analyze usage patterns to improve app features</li>
                <li>Monitor app performance and fix technical issues</li>
                <li>Develop new features based on user needs</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-secondary">3.3 Communication</h3>
              <ul className="list-disc pl-6 mb-4 text-foreground/80 space-y-2">
                <li>Send important account and security notifications</li>
                <li>Provide team-related updates and invitations</li>
                <li>Share app updates and new features</li>
              </ul>
            </section>

            {/* AI and Data Processing */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">4. AI and Data Processing</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-secondary">4.1 Spiritual Pattern Analysis</h3>
              <ul className="list-disc pl-6 mb-4 text-foreground/80 space-y-2">
                <li>Your note content may be processed by OpenAI&apos;s API to identify spiritual patterns</li>
                <li>This analysis helps provide insights into your spiritual journey</li>
                <li><strong>Important:</strong> AI analysis is a tool for pattern recognition, not spiritual guidance</li>
                <li>The Holy Spirit remains your ultimate guide for spiritual truth (John 16:13)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-secondary">4.2 Data Minimization</h3>
              <ul className="list-disc pl-6 mb-4 text-foreground/80 space-y-2">
                <li>We only send necessary note content for analysis</li>
                <li>Personal identifiers are removed where possible</li>
                <li>Analysis results are stored securely with your account</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">5. Information Sharing and Disclosure</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-secondary">5.1 Team Sharing</h3>
              <ul className="list-disc pl-6 mb-4 text-foreground/80 space-y-2">
                <li>Notes you explicitly share with teams are visible to team members</li>
                <li>Team members can see shared content, comments, and biblical references</li>
                <li>You control what content to share and with which teams</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-secondary">5.2 Third-Party Service Providers</h3>
              <ul className="list-disc pl-6 mb-4 text-foreground/80 space-y-2">
                <li><strong>Firebase (Google):</strong> Cloud storage and authentication</li>
                <li><strong>OpenAI:</strong> AI-powered spiritual pattern analysis</li>
                <li><strong>Bible API Services:</strong> Biblical verse retrieval</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-secondary">5.3 Legal Requirements</h3>
              <p className="text-foreground/80 mb-2">We may disclose your information if required by law or to:</p>
              <ul className="list-disc pl-6 mb-4 text-foreground/80 space-y-2">
                <li>Comply with legal obligations</li>
                <li>Protect our rights and safety</li>
                <li>Prevent fraud or security threats</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-secondary">5.4 What We Never Share</h3>
              <ul className="list-disc pl-6 mb-4 text-foreground/80 space-y-2">
                <li>We never sell your personal information</li>
                <li>We never share your private notes without your consent</li>
                <li>We never use your spiritual content for commercial purposes</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">6. Data Security</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-secondary">6.1 Security Measures</h3>
              <ul className="list-disc pl-6 mb-4 text-foreground/80 space-y-2">
                <li>End-to-end encryption for data transmission</li>
                <li>Secure cloud storage with Firebase</li>
                <li>Regular security audits and updates</li>
                <li>API key protection and secure authentication</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-secondary">6.2 Your Responsibilities</h3>
              <ul className="list-disc pl-6 mb-4 text-foreground/80 space-y-2">
                <li>Keep your account credentials secure</li>
                <li>Use strong, unique passwords</li>
                <li>Report any suspicious account activity</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">7. Your Rights and Choices</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-secondary">7.1 Account Control</h3>
              <ul className="list-disc pl-6 mb-4 text-foreground/80 space-y-2">
                <li><strong>Access:</strong> View and download your personal data</li>
                <li><strong>Correction:</strong> Update inaccurate personal information</li>
                <li><strong>Deletion:</strong> Request account and data deletion</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-secondary">7.2 Privacy Settings</h3>
              <ul className="list-disc pl-6 mb-4 text-foreground/80 space-y-2">
                <li>Control team sharing preferences</li>
                <li>Manage notification settings</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-secondary">7.3 Opting Out</h3>
              <ul className="list-disc pl-6 mb-4 text-foreground/80 space-y-2">
                <li>You can disable AI pattern analysis in settings</li>
                <li>You can leave teams or stop sharing content at any time</li>
                <li>You can delete your account and all associated data</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">8. Children&apos;s Privacy</h2>
              <p className="text-foreground/80 mb-4">
                Our app is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            {/* International Data Transfers */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">9. International Data Transfers</h2>
              <p className="text-foreground/80 mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable privacy laws.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">10. Changes to This Privacy Policy</h2>
              <p className="text-foreground/80 mb-2">
                We may update this Privacy Policy periodically. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 mb-4 text-foreground/80 space-y-2">
                <li>Posting the updated policy in the app</li>
                <li>Sending an email notification</li>
                <li>Displaying a prominent notice upon app opening</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">11. Contact Information</h2>
              <p className="text-foreground/80 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-muted/30 rounded-lg p-6 mb-4">
                <p className="text-foreground/80 mb-2">
                  <strong>Email:</strong> support@mypropheticjournal.com
                </p>
                <p className="text-foreground/80 mb-2">
                  <strong>Response Time:</strong> We aim to respond within 48 hours
                </p>
              </div>
            </section>

            {/* Spiritual Commitment */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">12. Spiritual Commitment</h2>
              <p className="text-foreground/80 mb-4">
                As a faith-based application, we are committed to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground/80 space-y-2">
                <li>Treating your spiritual content with reverence and respect</li>
                <li>Maintaining the highest ethical standards in data handling</li>
                <li>Supporting your spiritual growth while protecting your privacy</li>
                <li>Honoring the sacred nature of prophetic and spiritual content</li>
              </ul>

              {/* Scripture Quote */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border-l-4 border-primary">
                <p className="text-lg font-medium text-foreground mb-2">
                  &quot;But when he, the Spirit of truth, comes, he will guide you into all the truth.&quot;
                </p>
                <p className="text-sm text-foreground/70">- John 16:13</p>
              </div>

              <p className="text-foreground/80 mt-4">
                This app serves as a tool for spiritual organization and pattern recognition, but the Holy Spirit remains your ultimate guide for spiritual discernment.
              </p>
            </section>
          </div>

          {/* Back to Top */}
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-foreground/60">
            © 2025 My Prophetic Journal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
