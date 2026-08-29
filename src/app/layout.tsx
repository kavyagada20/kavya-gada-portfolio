import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { portfolioMeta } from '@/data/portfolio';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${portfolioMeta.name} | ${portfolioMeta.primaryRole}`,
  description: portfolioMeta.tagline,
  keywords: [
    'Kavya Gada',
    'AI Engineer',
    'ML Engineer',
    'Software Engineer',
    'RAG Pipelines',
    'AI Agents',
    'ChromaDB',
    'Python Developer',
    'DJSCE',
    'Community Tree'
  ],
  authors: [{ name: portfolioMeta.name }],
  creator: portfolioMeta.name,
  openGraph: {
    title: `${portfolioMeta.name} | ${portfolioMeta.primaryRole}`,
    description: portfolioMeta.tagline,
    type: 'website',
    locale: 'en_US',
    siteName: `${portfolioMeta.name} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolioMeta.name} | ${portfolioMeta.primaryRole}`,
    description: portfolioMeta.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: portfolioMeta.name,
    jobTitle: portfolioMeta.primaryRole,
    description: portfolioMeta.coreStatement,
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Dwarkadas J. Sanghvi College of Engineering',
    },
    sameAs: [
      portfolioMeta.socialLinks.github,
      portfolioMeta.socialLinks.linkedin,
      portfolioMeta.socialLinks.leetcode,
      portfolioMeta.socialLinks.hackerrank,
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body className="min-h-screen bg-bg text-text-primary antialiased flex flex-col justify-between selection:bg-accent-blue/30 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
