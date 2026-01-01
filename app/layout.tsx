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
  title: "April Broadhurst | Real Estate Rooted in the Pacific Northwest",
  description: "Discover your Pacific Northwest home with April Broadhurst. Deep roots in Pierce County, personalized service, and genuine care for the Tacoma community.",
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
