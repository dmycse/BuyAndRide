import type { Metadata } from "next";
import { Rajdhani, Mona_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Buy & Ride | Great Bycicles & Parts & Accessories",
  description: "On-line Shop of Bycicles, Bycicles Parts and Accessorie ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rajdhani.variable} ${mona.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
