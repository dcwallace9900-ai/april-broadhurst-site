# Real Estate Site

A modern, elegant real estate website built with Next.js, featuring a sophisticated design aesthetic — classy, and down-to-earth.

## Design Philosophy

This website embodies the refined elegance of Tacoma's coastal lifestyle through:

- **Typography**: Cormorant Garamond (serif) for headings and Arapey for body text
- **Color Palette**: Warm neutrals including Cream (#F5F1E8) and Soft Slate (#4A5568)
- **Layout**: Clean, editorial-inspired sections with generous white space
- **Aesthetic**: Timeless, sophisticated, and approachable

## Features

- **Full-Bleed Hero**: Striking editorial-style hero section with elegant typography
- **Split-Screen Bio**: Large, impactful bio section with portrait placeholder
- **Testimonials**: Client testimonials presented with refined simplicity
- **Minimalist Footer**: Clean contact information and social links
- **Responsive Design**: Fully responsive across all device sizes
- **Performance Optimized**: Built with Next.js App Router for optimal performance

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Google Fonts (Cormorant Garamond, Arapey)
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dcwallace9900-ai/real-estate-site.git
cd real-estate-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
real-estate-site/
├── app/
│   ├── page.tsx        # Home page
│   ├── layout.tsx      # Root layout with font configuration
│   └── globals.css     # Global styles and Tailwind config
├── public/             # Static assets
└── package.json        # Dependencies and scripts
```

## Customization

### Update Contact Information

Edit `app/page.tsx` and update:
- Email addresses
- Phone numbers
- Social media links

### Replace Placeholder Images

Replace the Unsplash URLs in `app/page.tsx` with your own images:
- Hero background image (line 12)
- Bio portrait image (line 33)

### Modify Colors

Update color variables in `app/globals.css`:
```css
:root {
  --cream: #F5F1E8;
  --soft-slate: #4A5568;
  --warm-white: #FEFDFB;
  --muted-charcoal: #2D3748;
}
```

### Change Fonts

Modify font imports in `app/layout.tsx` using [Google Fonts](https://fonts.google.com/)

## Deployment

### Deploy to Vercel

The easiest deployment option:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dcwallace9900-ai/real-estate-site)

### Other Platforms

This Next.js application can be deployed to:
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- Any platform supporting Node.js

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or collaboration:
- GitHub: [@dcwallace9900-ai](https://github.com/dcwallace9900-ai)

---

Built with care for the Santa Barbara real estate market.
