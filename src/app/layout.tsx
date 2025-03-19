import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Dashi Group | Leading Construction Company in London",
  description: "Dashi Group is a trusted London-based construction company, delivering high-profile projects with expertise, innovation, and a client-focused approach.",
  keywords: "construction company London, building contractors, high-profile construction projects, London construction services",
  openGraph: {
    title: "Dashi Group | Premier Construction Services in London",
    description: "Expert construction solutions in London. Dashi Group specializes in delivering high-profile projects with precision and excellence.",
    url: "https://www.dashigroup.com",
    type: "website",
    images: [
      {
        url: "https://www.dashigroup.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dashi Group - London-based construction company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashi Group | Trusted London Construction Experts",
    description: "Providing top-tier construction solutions in London. High-profile projects delivered with innovation and expertise.",
    images: ["https://www.dashigroup.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}