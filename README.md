# My Prophetic Journal - Landing Page

A modern, conversion-optimized landing page for "My Prophetic Journal" - a spiritual journaling app that helps believers track prophetic words, visions, dreams, and spiritual insights.

## Features

### 🎨 Design & UX
- **Modern, responsive design** with mobile-first approach
- **Brand-consistent color scheme** with spiritual-focused aesthetics
- **Smooth animations** and hover effects
- **Dark mode support** with automatic system preference detection
- **Accessible design** with proper semantic HTML and ARIA labels

### 📱 Landing Page Sections
1. **Hero Section** - Compelling headline with app store badges and social proof
2. **Social Proof** - User testimonials, ratings, and community stats  
3. **Features Showcase** - 5 key features with interactive cards and mockups
4. **How It Works** - 3-step process with biblical foundation
5. **Premium Pricing** - Free vs Premium comparison with clear value props
6. **Community & Teams** - Team collaboration features and testimonials
7. **Security & Privacy** - Trust indicators and compliance certifications
8. **Footer** - Final CTA, links, and contact information

### 🛠 Technical Stack
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Custom CSS variables** for brand colors
- **Responsive design** with mobile-first approach
- **SEO optimized** with proper meta tags and structured data

### 🎯 Key Features Highlighted
- **Voice Recording & AI Transcription**
- **Biblical References Integration** 
- **Pattern Recognition & Analysis**
- **Community & Team Collaboration**
- **Security & Privacy First**

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mpj-landing-page
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or  
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── HeroSection.tsx          # Main hero with CTA
│   │   ├── SocialProofSection.tsx   # Testimonials & stats
│   │   ├── FeaturesSection.tsx      # Core features showcase
│   │   ├── HowItWorksSection.tsx    # 3-step process
│   │   ├── PremiumSection.tsx       # Pricing & premium features
│   │   ├── CommunitySection.tsx     # Team collaboration
│   │   ├── SecuritySection.tsx      # Privacy & security
│   │   └── Footer.tsx               # Footer with final CTA
│   ├── globals.css                  # Global styles & CSS variables
│   ├── layout.tsx                   # Root layout with metadata
│   └── page.tsx                     # Main landing page
```

## Brand Colors

```css
--primary: #3385FF     /* Bright blue */
--secondary: #018786   /* Dark teal */
--tertiary: #5B9BD5    /* Softer blue */
--accent: #E57373      /* Coral for voice features */
--background: #FAFAFA  /* Light background */
--foreground: #1C1C1C  /* Dark text */
```

## Key Messaging

- **Primary Value Props:**
  - "Never lose a prophetic word again"
  - "Discover God's patterns in your life"  
  - "Connect deeper with Scripture"
  - "Grow with your spiritual community"

- **Biblical Foundation:** John 16:13, 1 Corinthians 14:29
- **Target Audience:** Christians, believers, prophetic communities

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## Performance

- **Core Web Vitals optimized**
- **Image optimization** with Next.js Image component
- **Font optimization** with Google Fonts
- **Lazy loading** for below-the-fold content
- **Minimal JavaScript** for fast loading

## SEO Features

- **Semantic HTML** structure
- **Meta tags** for social sharing
- **Open Graph** tags for Facebook/Twitter
- **Structured data** for search engines
- **Sitemap** generation
- **Proper heading hierarchy**

## Browser Support

- Chrome 90+
- Firefox 88+  
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and confidential.
