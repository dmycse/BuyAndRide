import type { Metadata } from "next";
import { Rajdhani, Mona_Sans } from "next/font/google";
import { SanityLive } from "@/sanity/lib/live";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import { CartProvider } from "@/components/providers/CartProvider";
import { Toaster } from "@/components/ui/sonner"

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mona = Mona_Sans({
  variable: "--font-mona",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buy & Ride | Most Popular Bycicles & Accessories",
  description: "On-line Shop of Most Popular Bycicles, Bycicles Parts and Accessorie ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${mona.variable} antialiased`}>
        <CartProvider>
          <Header />
            {children}
          <SanityLive />
          <Footer />
          <Toaster richColors />
        </CartProvider>
      </body>
    </html>
  );
}
