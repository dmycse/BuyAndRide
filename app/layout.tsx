import type { Metadata } from "next";
import { Rajdhani, Mona_Sans } from "next/font/google";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { WISHLIST_QUERY } from "@/sanity/lib/queries";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/components/providers/CartProvider";
import { WishlistContextProvider } from "@/components/providers/WishListContextProvider";
import { Toaster } from "@/components/ui/sonner"
import { getWishList } from "@/actions/wishlist";
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
  title: "Buy & Ride | Most Wanted Bycicles",
  description: "On-line Shop of Most Popular Bycicles, Bycicles Parts and Accessorie ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const wishlist = await getWishList();
  const {data: wishlistBikes}  = await sanityFetch({query: WISHLIST_QUERY, params: {ids: wishlist}});

  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${mona.variable} antialiased`}>
        <WishlistContextProvider wishlist={wishlistBikes}>
          <CartProvider>
            <Header />
              {children}
            <SanityLive />
            <Footer />
            <Toaster richColors />
          </CartProvider>
        </WishlistContextProvider>
      </body>
    </html>
  );
}
