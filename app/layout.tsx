import type { Metadata } from "next";
import { Cormorant_Garamond, Arapey } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const arapey = Arapey({
  variable: "--font-arapey",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "April Broadhurst | Real Estate Rooted in Tacoma",
  description: "Expert real estate services in Tacoma and Pierce County. Focused on helping buyers and sellers navigate the PNW market.",
  keywords: "Tacoma real estate, Tacoma home buyer, Pierce County realtor, April Broadhurst, Washington real estate",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${arapey.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
