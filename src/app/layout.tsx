import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});


export const metadata: Metadata = {
  title: "StrongBody AI | AI-Native Health Services Marketplace",
  description: "StrongBody AI connects verified health professionals and clients in the United States and globally through a secure digital infrastructure with AI-powered communication and escrow payments.",
  keywords: ["StrongBody AI", "Health Marketplace", "AI Health", "Verified Doctors", "Telehealth US", "Escrow Medical Payments", "Medical Aesthetic", "MultiMe AI"],
  authors: [{ name: "StrongBody AI Team" }],
  openGraph: {
    title: "StrongBody AI | AI-Native Health Services Marketplace",
    description: "A secure digital infrastructure connecting verified health professionals and clients in the United States and beyond.",
    url: "https://strongbody.ai",
    siteName: "StrongBody AI",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "StrongBody AI Platform Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StrongBody AI | AI-Native Health Services Marketplace",
    description: "Securely connecting verified health professionals and clients globally with MultiMe AI.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans antialiased text-slate-900 bg-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
