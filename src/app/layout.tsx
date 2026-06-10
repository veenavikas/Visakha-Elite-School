import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Visakha Elite School | Shaping Leaders, Inspiring Minds",
  description: "Visakha Elite School is a premier educational institution providing world-class facilities, holistic curriculum, smart classrooms, robotics labs, and comprehensive sports facilities.",
  keywords: ["school", "elite school", "visakhapatnam", "robotics", "smart classrooms", "admissions 2026", "education"],
  authors: [{ name: "Visakha Elite School" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <body style={{ paddingTop: "110px" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
