import type { Metadata, Viewport } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chinese Heaven | Authentic Cantonese Cuisine in the Heart of the City",
  description: "Experience the art of traditional Cantonese cooking. Hand-pulled noodles, dim sum crafted at dawn, wok hei that sings. Reserve your table at Chinese Heaven.",
  keywords: ["chinese restaurant", "cantonese cuisine", "dim sum", "hand-pulled noodles", "wok hei", "fine dining", "reservation"],
  authors: [{ name: "Chinese Heaven" }],
  creator: "Chinese Heaven",
  publisher: "Chinese Heaven",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chineseheaven.com",
    title: "Chinese Heaven | Authentic Cantonese Cuisine",
    description: "Experience the art of traditional Cantonese cooking. Hand-pulled noodles, dim sum crafted at dawn, wok hei that sings.",
    siteName: "Chinese Heaven",
    images: [
      {
        url: "/hero-poster.jpg",
        width: 1200,
        height: 630,
        alt: "Chinese Heaven - Authentic Cantonese Cuisine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Heaven | Authentic Cantonese Cuisine",
    description: "Experience the art of traditional Cantonese cooking. Hand-pulled noodles, dim sum crafted at dawn, wok hei that sings.",
    images: ["/hero-poster.jpg"],
  },
  alternates: {
    canonical: "https://chineseheaven.com",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1c1c" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${display.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}