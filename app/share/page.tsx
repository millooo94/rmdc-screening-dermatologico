import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/landing-page";

const shareUrl = "https://screening.remedic.it/share";
const shareImage = "https://screening.remedic.it/images/og-share.jpg";
const shareTitle = "Screening Dermatologico a 60 euro | Remedic";
const shareDescription =
  "Maggio e il mese della prevenzione. Prenota il tuo screening dermatologico con mappatura dei nei.";

export const metadata: Metadata = {
  alternates: {
    canonical: shareUrl,
  },
  title: shareTitle,
  description: shareDescription,
  openGraph: {
    title: shareTitle,
    description: shareDescription,
    type: "website",
    url: shareUrl,
    siteName: "Remedic",
    locale: "it_IT",
    images: [
      {
        url: shareImage,
        secureUrl: shareImage,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Remedic - Screening Dermatologico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
    images: [shareImage],
  },
};

export default function SharePage() {
  return <LandingPage />;
}
