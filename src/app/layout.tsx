import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://biahes.com"),
  title: `${BRAND.name} - ${BRAND.tagline}`,
  description: "Discover amazing destinations across the Philippines and beyond with Biahes. Book tours, flights and hotels in one place.",
  keywords: ["travel", "tours", "packages", "vacation", "Philippines", "Asia", "tour operator", "travel agency", "booking"],
  authors: [{ name: "Biahes" }],
  creator: "Biahes",
  publisher: "Biahes",
  formatDetection: {
    email: false,
    telephone: true,
    address: true,
  },
  openGraph: {
    title: `${BRAND.name} - ${BRAND.tagline}`,
    description: "Discover amazing destinations across the Philippines and beyond with Biahes.",
    url: "https://biahes.com",
    siteName: BRAND.name,
    type: "website",
    images: [
      {
        url: "/images/logos/biahes-logo.png",
        width: 1200,
        height: 630,
        alt: "Biahes logo",
      },
    ],
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} - ${BRAND.tagline}`,
    description: "Discover amazing destinations across the Philippines and beyond.",
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
      <body className="bh-body min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
