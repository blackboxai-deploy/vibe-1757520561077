import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'EduPro Suite - The Definitive Educational Management System',
  description: 'A comprehensive, market-leading ERP solution designed specifically for educational institutions in Bangladesh, with special focus on Madrasah management.',
  keywords: 'education management, ERP, school management, madrasah, Bangladesh, student information system',
  authors: [{ name: 'EduPro Suite Team' }],
  creator: 'EduPro Suite',
  publisher: 'EduPro Suite',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'EduPro Suite - Educational Management System',
    description: 'The definitive ERP solution for educational institutions',
    url: 'http://localhost:3000',
    siteName: 'EduPro Suite',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#16a34a" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="relative min-h-screen bg-background">
          <div className="absolute inset-0 islamic-pattern-bg opacity-30" />
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}