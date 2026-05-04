import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Neo Mori Tech — tabOS | Smarter Restaurant Service",
    template: "%s · Neo Mori Tech",
  },
  description:
    "tabOS by Neo Mori Tech Information Solutions Corp. is a tablet-based digital ordering ecosystem that modernizes restaurant operations and elevates the guest experience.",
  keywords: [
    "tabOS",
    "Neo Mori Tech",
    "restaurant tablet ordering",
    "POS Davao",
    "digital menu Philippines",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body className="bg-white text-ink-900 antialiased">
        <main className="relative overflow-hidden">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
