import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Remedic | Screening Dermatologico Maggio 2025 - Prevenzione Melanoma',
  description: 'Maggio è il mese della consapevolezza sul melanoma. Prenota il tuo screening dermatologico con mappatura dei nei a soli 60€. Remedic - Centro Medico Polispecialistico.',
  keywords: ['screening dermatologico', 'mappatura nei', 'melanoma', 'prevenzione', 'dermatologia', 'Remedic'],
  openGraph: {
    title: 'Screening Dermatologico a 60€ | Remedic',
    description: 'Maggio è il mese della prevenzione. Prenota il tuo screening dermatologico con mappatura dei nei.',
    type: 'website',
    url: '/',
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: 'Remedic - Screening Dermatologico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Screening Dermatologico a 60€ | Remedic',
    description: 'Maggio è il mese della prevenzione. Prenota il tuo screening dermatologico con mappatura dei nei.',
    images: ['/images/og.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#1C9EBD',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${plusJakarta.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
