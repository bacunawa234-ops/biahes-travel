import type { Metadata } from "next";
import "./globals.css";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://biahes.com"),
  title: `${BRAND.name} - ${BRAND.tagline}`,
  description: "Discover amazing travel packages with Biahes Travel & Tours. Book unforgettable tours across Asia with expert guides and best prices.",
  keywords: ["travel", "tours", "packages", "vacation", "Philippines", "Asia", "tour operator", "travel agency", "booking"],
  authors: [{ name: "Biahes Travel & Tours" }],
  creator: "Biahes Travel & Tours",
  publisher: "Biahes Travel & Tours",
  formatDetection: {
    email: false,
    telephone: true,
    address: true,
  },
  openGraph: {
    title: `${BRAND.name} - ${BRAND.tagline}`,
    description: "Discover amazing travel packages with Biahes Travel & Tours. Book unforgettable tours across Asia.",
    url: "https://biahes.com",
    siteName: BRAND.name,
    type: "website",
    images: [
      {
        url: "/images/logos/biahes-logo.png",
        width: 1200,
        height: 630,
        alt: "Biahes Travel & Tours Logo",
      },
    ],
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} - ${BRAND.tagline}`,
    description: "Discover amazing travel packages with Biahes Travel & Tours.",
    images: ["/images/logos/biahes-logo.png"],
    creator: "@biahes",
  },
  alternates: {
    canonical: "https://biahes.com",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-biahes-navy antialiased">
        {children}
      </body>
    </html>
  );
}
