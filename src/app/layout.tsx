import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

// Base URL - update this with your production domain
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vsca-website.vercel.app";

export const metadata: Metadata = {
  title: "VSCA Framework - The Value-Sensitive Conversational Agent Framework",
  description: "The VSCA Framework (Value-Sensitive Conversational Agent Framework) helps you and your team develop conversational agents that align with the values of all stakeholders involved.",
  keywords: ["VSCA Framework", "conversational AI", "value-sensitive design", "chatbot design", "AI ethics", "human-centered design"],
  authors: [{ name: "Malak Sadek" }],
  creator: "Malak Sadek",
  publisher: "VSCA Framework",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    title: "VSCA Framework - The Value-Sensitive Conversational Agent Framework",
    description: "The VSCA Framework helps you and your team develop conversational agents that align with the values of all stakeholders involved.",
    siteName: "VSCA Framework",
    images: [
      {
        url: `${baseUrl}/Logo.png`,
        width: 1200,
        height: 630,
        alt: "VSCA Framework Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VSCA Framework - The Value-Sensitive Conversational Agent Framework",
    description: "The VSCA Framework helps you and your team develop conversational agents that align with the values of all stakeholders involved.",
    images: [`${baseUrl}/Logo.png`],
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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vsca-website.vercel.app";
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VSCA Framework",
    "description": "The VSCA Framework (Value-Sensitive Conversational Agent Framework) helps you and your team develop conversational agents that align with the values of all stakeholders involved.",
    "url": baseUrl,
    "logo": `${baseUrl}/Logo.png`,
    "founder": {
      "@type": "Person",
      "name": "Malak Sadek",
      "jobTitle": "Researcher and Academic",
      "affiliation": {
        "@type": "Organization",
        "name": "Cambridge University + Imperial College London"
      },
      "sameAs": [
        "https://www.linkedin.com/in/malaksadek/",
        "https://malaksadekapps.com",
        "https://scholar.google.com/citations?hl=en&user=-0Sh_uAAAAAJ"
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/in/malaksadek/",
      "https://malaksadekapps.com"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "General Inquiry",
      "url": `${baseUrl}/contact`
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
