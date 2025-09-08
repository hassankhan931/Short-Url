import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Short URL | Modern URL Shortener",
  description:
    "Shorten, manage, and share your links with ease. Short URL is a modern, secure, and reliable URL shortener built with Next.js.",
  keywords: [
    "URL Shortener",
    "Short URL",
    "Link Management",
    "Next.js",
    "React",
    "Tailwind",
  ],
  creator: "Short URL",
  metadataBase: new URL("https://short-url-ochre-nine.vercel.app/"), // Replace with your production domain
  alternates: {
    canonical: "https://short-url-ochre-nine.vercel.app/",
  },
  icons: {
    icon: "/images.png",
    shortcut: "/images.png",
    apple: "/images.png",
  },
  openGraph: {
    title: "Short URL | Modern URL Shortener",
    description:
      "Shorten, manage, and share your links with ease. Short URL is a modern, secure, and reliable URL shortener built with Next.js.",
    url: "https://short-url-ochre-nine.vercel.app/",
    siteName: "Short URL",
    images: [
      {
        url: "/images.png",
        width: 512,
        height: 512,
        alt: "Short URL Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Short URL | Modern URL Shortener",
    description:
      "Shorten, manage, and share your links with ease. Short URL is a modern, secure, and reliable URL shortener built with Next.js.",
    images: ["/images.png"],
    creator: "@ShortURL",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
