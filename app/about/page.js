import React from "react";
import Image from "next/image";
const logo =
  "https://images.unsplash.com/photo-1756680967361-70237a554a76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D";
// Page-specific metadata (Server Component only)
export const metadata = {
  title: "About Short URL | Modern URL Shortener",
  description:
    "Learn about Short URL, a modern and secure URL shortener. We prioritize privacy, security, and reliability while making link sharing simple.",
  keywords: [
    "About Short URL",
    "URL Shortener",
    "Link Management",
    "Next.js",
    "React",
    "Tailwind",
  ],
  creator: "Short URL",
  alternates: {
    canonical: "https://short-url-ochre-nine.vercel.app/about",
  },
  openGraph: {
    title: "About Short URL | Modern URL Shortener",
    description:
      "Discover Short URL, the secure and reliable Next.js URL shortener that keeps your links safe and accessible.",
    url: "https://short-url-ochre-nine.vercel.app/about",
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
    title: "About Short URL | Modern URL Shortener",
    description:
      "Learn about Short URL, the modern, secure, and reliable URL shortener.",
    images: ["/images.png"],
    creator: "@ShortURL",
  },
};

export default function About() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Optimized Background Image */}
      <Image
        src={logo}
        alt="About background"
        fill
        loading="eager"
        priority
        className="object-cover brightness-50 blur-sm"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-3xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-10 text-center border border-white/20 mt-15">
        <h1 className="text-4xl font-bold text-amber-400 mb-6">
          About <span className="text-white">ShortURL</span>
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          At <span className="text-amber-400 font-semibold">ShortURL</span>, we
          prioritize your <span className="text-amber-400">privacy</span> and
          data <span className="text-amber-400">security</span>. Every link you
          shorten is securely stored and processed with modern encryption
          practices.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Our servers are optimized for{" "}
          <span className="text-amber-400">speed</span>,{" "}
          <span className="text-amber-400">reliability</span>, and{" "}
          <span className="text-amber-400">uptime</span>. Your links remain safe
          and accessible anytime, anywhere.
        </p>
        <p className="text-lg leading-relaxed">
          We believe in building a tool that is{" "}
          <span className="text-amber-400">simple</span>,{" "}
          <span className="text-amber-400">secure</span>, and{" "}
          <span className="text-amber-400">user-friendly</span> — so you can
          focus on sharing, not worrying.
        </p>
      </div>
    </div>
  );
}
