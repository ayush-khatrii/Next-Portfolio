import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: "Ayush Khatri - Web Developer Portfolio | Nextjs",
  description: "Ayush Khatri: Web Developer Portfolio. Explore my diverse web projects and skills in creating innovative, responsive websites.",
  metadataBase: new URL('https://ayushkhatri.site'),
  authors: [{ name: 'Ayush Khatri' }],
  creator: 'Ayush Khatri',
  publisher: 'Ayush Khatri',
  applicationName: 'Ayush Khatri - Web Developer Portfolio | Nextjs',
  keywords: ['web developer', 'portfolio', 'Ayush Khatri', 'nextjs'],

  openGraph: {
    title: 'Ayush Khatri - Web Developer Portfolio | Nextjs',
    description: 'Explore the portfolio of Ayush Khatri, a skilled web developer showcasing various projects and skills.',
    url: 'https://ayushkhatri.site/',
    siteName: 'Ayush Khatri Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ayush Khatri Portfolio'
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ayush Khatri - Web Developer Portfolio | Nextjs',
    description: 'Ayush Khatri: Web Developer Portfolio. Explore my diverse web projects and skills in creating innovative, responsive websites.',
    images: [
      {
        url: '/twitter-og.png',
        width: 1200,
        height: 630,
        alt: 'Ayush Khatri Portfolio'
      }
    ],
  },

  verification: {
    google: 'gE7bK5UpLNwVVgfoPcGbMkq2qEWOTZG2Xv90n1VRpho',
  },

  alternates: {
    canonical: 'https://ayushkhatri.site',
  },

  icons: {
    icon: '/og-image.png',
  },
};